import React from 'react';
export const ServiceOrderTypes = ({ serviceOrderTypes, handleEdit, handleDelete }) => (
	<div className="row">
		<table className="table table-striped table-bordered table-hover">
			<thead >
				<tr>
					<th>Value</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{serviceOrderTypes.map(function (val, index) {
					return <tr key={index}>
						<td>{val.orderTypeName}</td>
						<td>
							<span className="btn btn-icon-only blue info" onClick={(e) => handleEdit(e, index)}>
								<i className="fa fa-pencil"></i>
							</span>
							<span className="btn btn-icon-only red"  onClick={(e) => handleDelete(e, index, val._id)}>
								<i className="fa fa-trash-o"></i>
							</span>
						</td>
					</tr>;
				})}
			</tbody>
		</table>
	</div>
);