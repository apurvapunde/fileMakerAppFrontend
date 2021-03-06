import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import * as loader from '../../constants/actionTypes.js';
import * as appValid from '../../scripts/app';
import * as layout from '../../scripts/app';
import jQuery from 'jquery';
import moment from 'moment';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import * as timerAction from '../../actions/timerActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/bootstrap-fileinput.css';
import autoBind from 'react-autobind';

class TimerEdit extends React.Component {
	constructor(props, context) {
		super(props, context);
		autoBind(this);
		this.state = {
			disabled: false,
			timerDetail: '',
			contactValue: '',
			contactOptions: [],
			projectValue: '',
			projectOptions: [],
			itemValue: '',
			itemOptions: [],
			startDate: '',
			endDate: '',
			hoursRt: 8
		};
	}

	componentWillMount() {
		var data1 = {
			parent: 'Timers',
			childone: '',
			childtwo: ''
		};

		this.props.breadCrumb(data1);
	}

	componentDidMount() {
		appValid
			.FormValidationMd
			.init();
		setTimeout(function () {
			layout
				.FloatLabel
				.init();
		}, 400);

		var timerId = {
			companyId: localStorage.companyId,
			timerId: this.props.params.timerId
		};
		this
			.props
			.actions
			.getTimerDetailValues(timerId);
	}
	componentDidUpdate() {
		this.triggerLabel();
       
	}
	triggerLabel() {
		var totalHrs = ReactDOM.findDOMNode(this.refs.totalHr).value.trim();
		if (totalHrs) {
			var hrs = ReactDOM.findDOMNode(this.refs.totalHr);
			hrs.className += ' edited';
		}
	}
	handleContactChange(value) {

		this.setState({ contactValue: value });
	}

	onInputContactChange(value) {
		var data = {
			firstname: value,
			companyId: localStorage.companyId
		};
		this
			.props
			.actions
			.getIndividualData(data);
	}

	handleProjectChange(value) {

		this.setState({ projectValue: value });
	}

	onInputProjectChange(value) {
		var data = {
			title: value,
			companyId: localStorage.companyId
		};
		this
			.props
			.actions
			.getProjectData(data);
	}

	handleItemChange(value) {

		this.setState({ itemValue: value });
	}

	onInputItemChange(value) {
		if (this.state.projectValue && this.state.projectValue.id) {
			var data = {
				itemName: value,
				projectId: this.state.projectValue.id
			};
			this
				.props
				.actions
				.getItemData(data);
		}
	}

	handleStartDate(event, picker) {

		var displayDate = picker
			.startDate
			.format('MM-DD-YYYY h:mm:ss a');
		this.setState({ startDate: displayDate });
		layout
			.FloatLabel
			.init();

		var validator = jQuery('#createTimer').validate();
		validator.element('#startDateTime');
		jQuery('span[id^="startDateTime-error"]').remove();

	}
	// handleEndDate(event, picker) {
	//     var displayDate = picker
	//         .startDate
	//         .format('MM-DD-YYYY h:mm:ss a');
	//     this.setState({ endDate: displayDate });
	//     layout
	//         .FloatLabel
	//         .init();

	//     var validator = jQuery("#createTimer").validate();
	//     validator.element("#endDateTime");
	//     jQuery('span[id^="endDateTime-error"]').remove();
	// }

	handleEndDate(event, picker) {
		var displayDate = picker
			.startDate
			.format('MM-DD-YYYY h:mm:ss a');
		if (this.state.startDate) {
			let from = moment(this.state.startDate, 'MM/DD/YYYY'); // format in which you have the date
			let to = moment(displayDate, 'MM/DD/YYYY');     // format in which you have the date
			/* using diff */
			let duration = to.diff(from, 'days');
			if (duration >= 1) {
				this.setState({ endDate: displayDate });
				var validator = jQuery('#createTimer').validate();
				validator.element('#endDateTime');
				jQuery('span[id^="endDateTime-error"]').remove();
			}
			else {
				toastr.error('End date should be greater than start date.');
				this.setState({ projectEndDate: '' });
			}
		}
		else {
			toastr.error('Please select start date first.');
			this.setState({ endDate: '' });
		}

	}


	timerHandler() {
		if (jQuery('#createTimer').valid()) {
			var hr = parseInt(ReactDOM.findDOMNode(this.refs.totalHr).value);
			if (hr <= 0 || hr == '') {
				toastr.error('Please select valid date');
				return false;
			}
			$('div#update_timer').block({
				message: loader.GET_LOADER_IMAGE,
				css: {
					width: '25%'
				},
				overlayCSS: { backgroundColor: '#ffffff', opacity: 0.7 }
			});
			var hoursOt = '';
			var hoursDt = '';

			if (hr > this.state.hoursRt && hr < this.state.hoursRt * 2) {
				hoursOt = hr - this.state.hoursRt;
			} else if (hr > this.state.hoursRt * 2) {
				hoursDt = hr - this.state.hoursRt;
			}
			var startDate = this
				.state
				.startDate
				.split(' ');
			var endDate = this
				.state
				.endDate
				.split(' ');
			var timerDetails = {
				timerId: this.props.params.timerId,
				companyId: localStorage.companyId,
				companyEmployeeId: localStorage.companyEmployeeId,
				contactId: this.state.contactValue
					? this.state.contactValue.id
					: '',
				projectId: this.state.projectValue
					? this.state.projectValue.id
					: '',
				projectItemId: this.state.itemValue
					? this.state.itemValue.id
					: '',
				startDate: startDate[0],
				startTime: startDate[1] + ' ' + endDate[2],
				endDate: endDate[0],
				endTime: endDate[1] + ' ' + endDate[2],
				totalHours: ReactDOM
					.findDOMNode(this.refs.totalHr)
					.value,
				description: ReactDOM
					.findDOMNode(this.refs.description)
					.value,
				wageRate: ReactDOM
					.findDOMNode(this.refs.wageRate)
					.value,
				hoursDt: hoursDt.toString(),
				hoursRt: this
					.state
					.hoursRt
					.toString(),
				hoursOt: hoursOt.toString(),
				modifiedBy: localStorage.userName
			};
			this
				.props
				.actions
				.updateTimer(timerDetails);

		}
	}
	componentWillReceiveProps(nextProps) {
		var contact = [];
		var project = [];
		var item = [];

		var contactList = nextProps
			.individualList
			.map(function (list, index) {
				var obj = {
					id: list._id,
					label: list.firstname + ' ' + list.lastname
				};
				contact.push(obj);
			}.bind(this));

		var projectList = nextProps
			.projectList
			.map(function (list, index) {
				var obj = {
					id: list._id,
					label: list.title
				};
				project.push(obj);
			}.bind(this));

		var itemList = nextProps
			.itemList
			.map(function (list, index) {
				var obj = {
					id: list._id,
					label: list.itemName
				};
				item.push(obj);
			}.bind(this));

		// contact
		if(nextProps.timerDetail.length!=0){
			if (contact.length == 0 && nextProps.timerDetail.contactId) {
				var selContact = {
					id: nextProps.timerDetail.contactId._id,
					label: nextProps.timerDetail.contactId.firstname + ' ' + nextProps.timerDetail.contactId.firstname
				};
    
				this.setState({ contactValue: selContact });
			}
			// project
			if (project.length == 0 && nextProps.timerDetail.projectId) {
				var selProject = {
					id: nextProps.timerDetail.projectId._id,
					label: nextProps.timerDetail.projectId.title
				};
    
				this.setState({ projectValue: selProject });
			}
			// item
			if (item.length == 0 && nextProps.timerDetail.projectTaskId) {
				var selItem = {
					id: nextProps.timerDetail.projectTaskId._id,
					label: nextProps.timerDetail.projectTaskId.itemName
				};
    
				this.setState({ itemValue: selItem });
			}
    
			if (this.state.startDate == '' && this.state.endDate == '') {
				var start = moment(nextProps.timerDetail.startDate).format('MM-DD-YYYY') + ' ' + nextProps.timerDetail.startTime;
				var end = moment(nextProps.timerDetail.endDate).format('MM-DD-YYYY') + ' ' + nextProps.timerDetail.endTime;
				this.setState({ startDate: start, endDate: end });
			}
			this.setState({ timerDetail: nextProps.timerDetail, contactOptions: contact, itemOptions: item, projectOptions: project });
    
		}
      
		setTimeout(function () {
			layout
				.FloatLabel
				.init();
			layout
				.FormValidationMd
				.init();
		}, 400);
	}

	render() {
		var timerData = this.state.timerDetail;
		var totalHr = '';
		if (timerData) {
			if (this.state.startDate && this.state.endDate) {
				var m1 = moment(this.state.startDate, 'MM-DD-YYYY hh:mm A');
				var m2 = moment(this.state.endDate, 'MM-DD-YYYY hh:mm A');
				var totalHr = m2.diff(m1, 'minutes');
				totalHr = totalHr / 60;
            }
            this.state.timerDetail.totalHours=totalHr;
		}

		return (
			<div>
				{timerData
					? <div>
						<div className="portlet-title tabbable-line">
							<ul className="nav nav-tabs">
								<li className="active">
									<a href="#timer-add" data-toggle="tab">
                                        Timer
									</a>
								</li>
								{/*<li>
                                    <a href="#timer-moreinfo" data-toggle="tab">
                                        More Info
                                        </a>
                                </li>*/}
								<div className="form-actions noborder text-right">
									<Link to={'/timer/' + this.props.params.timerId} className="btn red">
                                        Cancel
									</Link>&nbsp;&nbsp;
									<button type="button" className="btn blue" onClick={this.timerHandler}>Save</button>
								</div>
							</ul>
						</div>
						<div className="portlet light bordered" id="update_timer">
							<div className="portlet-body">
								<div className="tab-content">
									<div className="tab-pane active" id="timer-add">
										<div className="portlet-title">
											<div className="caption">
												<span className="caption-subject bold uppercase">General Details</span>
											</div>
										</div>
										<form role="form" id="createTimer">
											<div className="form-body">
												<div className="row">
													<div className="col-md-6">
														<div className="form-group form-md-line-input form-md-floating-label">
															<input
																type="text"
																className="form-control"
																id=""
																name="user"
																disabled={true}
																defaultValue={localStorage.userName} />
															<label htmlFor="user">User</label>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group form-md-line-input form-md-floating-label">
															<label htmlFor="project">Project<span className="required">*</span></label>
															<Select
																disabled={this.state.disabled}
																value={this.state.projectValue}
																placeholder="Project"
																name=""
																options={this.state.projectOptions}
																onChange={this.handleProjectChange}
																onInputChange={this.onInputProjectChange}
																style={{
																	'marginTop': '25px'
																}} />
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group  form-md-floating-label">
															<label htmlFor="startDateTime">Start<span className="required">*</span></label>
															<DateRangePicker
																showDropdowns={true}
																minDate={moment()}
																timePicker={true}
																onApply={this.handleStartDate}
																singleDatePicker>
																<div className="input-group date form_datetime">
																	<input
																		type="text"
																		className="selected-date-range-btn"
																		size="16"
																		name="startDateTime"
																		id="startDateTime"
																		readOnly={true}
																		className="form-control"
																		defaultValue={this.state.startDate}
																		key={this.state.startDate} />
																	<span className="input-group-btn">
																		<button className="btn default date-set calendar-shadow-none" type="button">
																			<i className="fa fa-calendar"></i>
																		</button>
																	</span>
																</div>
															</DateRangePicker>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group  form-md-floating-label">
															<label htmlFor="endDateTime">End<span className="required">*</span></label>
															<DateRangePicker
																showDropdowns={true}
																minDate={moment()}
																timePicker={true}
																onApply={this.handleEndDate}
																singleDatePicker>
																<div className="input-group date form_datetime">
																	<input
																		type="text"
																		className="selected-date-range-btn"
																		size="16"
																		name="endDateTime"
																		id="endDateTime"
																		readOnly={true}
																		className="form-control"
																		defaultValue={this.state.endDate}
																		key={this.state.endDate} />
																	<span className="input-group-btn">
																		<button className="btn default date-set calendar-shadow-none" type="button">
																			<i className="fa fa-calendar"></i>
																		</button>
																	</span>
																</div>
															</DateRangePicker>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group form-md-line-input form-md-floating-label">
															<input
																type="text"
																className="form-control"
																ref="totalHr"
																name="totalHr"
																disabled={true}
																value={this.state.timerDetail.totalHours >= 0
																	? this.state.timerDetail.totalHours
																	: ''}
																key={totalHr} />
															<label htmlFor="totalHr">Total Hrs<span className="required">*</span></label>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group form-md-line-input form-md-floating-label">
															<input
																type="text"
																className="form-control"
																ref="description"
																name="description"
																key={timerData.description}
																defaultValue={timerData.description} />
															<label htmlFor="description">Description<span className="required">*</span></label>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group form-md-line-input form-md-floating-label">
															<label htmlFor="contact">Contact<span className="required">*</span></label>
															<Select
																disabled={this.state.disabled}
																value={this.state.contactValue}
																placeholder="Contact"
																name=""
																options={this.state.contactOptions}
																onChange={this.handleContactChange}
																onInputChange={this.onInputContactChange}
																style={{
																	'marginTop': '25px'
																}} />
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group form-md-line-input form-md-floating-label">
															<label htmlFor="projectItem">Project Item<span className="required">*</span></label>
															<Select
																disabled={this.state.disabled}
																value={this.state.itemValue}
																placeholder="Project Item"
																name=""
																options={this.state.itemOptions}
																onChange={this.handleItemChange}
																onInputChange={this.onInputItemChange}
																style={{
																	'marginTop': '25px'
																}} />
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group form-md-line-input form-md-floating-label">
															<input
																type="text"
																className="form-control"
																ref="wageRate"
																name="wageRate"
																key={timerData.wageRate}
																defaultValue={timerData.wageRate} />
															<label htmlFor="wageRate">Wage Rate<span className="required">*</span></label>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group form-md-line-input form-md-floating-label">
															<input
																type="text"
																className="form-control"
																ref="empApproved"
																name="empApproved"
																disabled={true}
																defaultValue="" />
															<label htmlFor="empApproved">Emp Approved</label>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
									<div className="tab-pane" id="timer-moreinfo">
										<div className="portlet-title tabbable-line">
											<div className="caption">
												<span className="caption-subject font-dark bold uppercase">Other Details</span>
											</div>
										</div>
										<div className="portlet-body">
											<div className="tab-content">
												<form action="#" className="horizontal-form">
													<div className="form-body">
														<div className="row">
															<div className="col-md-6">
																<div className="form-group form-md-line-input form-md-floating-label">
																	<div className="form-control form-control-static">
																		{timerData.description}
																	</div>
																	<label htmlFor="form_control_1">Desc</label>
																</div>
															</div>
															<div className="col-md-4">
																<div className="form-group form-md-line-input form-md-floating-label">
																	<div className="form-control form-control-static">
                                                                        -
																	</div>
																	<label htmlFor="form_control_1">Created By</label>
																</div>
															</div>
															<div className="col-md-2">
																<div className="form-group form-md-line-input form-md-floating-label">
																	<div className="form-control form-control-static">
																		{timerData.createdAt}
																	</div>
																	<label htmlFor="form_control_1">On</label>
																</div>
															</div>
															<div className="col-md-6">
																<div className="form-group form-md-line-input form-md-floating-label">
																	<div className="form-control form-control-static">
																		{timerData.timerNumber}
																	</div>
																	<label htmlFor="form_control_1">Timer #</label>
																</div>
															</div>
															<div className="col-md-4">
																<div className="form-group form-md-line-input form-md-floating-label">
																	<div className="form-control form-control-static">
                                                                        -
																	</div>
																	<label htmlFor="form_control_1">Modified By</label>
																</div>
															</div>
															<div className="col-md-2">
																<div className="form-group form-md-line-input form-md-floating-label">
																	<div className="form-control form-control-static">
                                                                        -
																	</div>
																	<label htmlFor="form_control_1">On</label>
																</div>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					: null}
			</div >

		);
	}
}
//this tells what state should expose on props
function mapStateToProps(state, ownProps) {

	return { projectList: state.timer.projectList, individualList: state.timer.individualList, itemList: state.timer.itemList, timerDetail: state.timer.timerDetailData };
}
// this tells what action should expose on props bindActionCreators is used to
// bind all actions at once
function mapDispatchToProps(dispatch) {

	return {
		actions: bindActionCreators(timerAction, dispatch)
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(TimerEdit);