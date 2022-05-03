import React from "react";
import PropTypes from "prop-types";

const SecondCounter = (props) => {
	return (
		<div className="col">
			<div className="card bg-light">
				<div className="card-body d-flex justify-content-center ">
					<h5 className="card-title ">
						{props.logo} {props.num}
					</h5>
				</div>
			</div>
		</div>
	);
};

SecondCounter.propTypes = {
	num: PropTypes.number,
	logo: PropTypes.object,
};

export default SecondCounter;
