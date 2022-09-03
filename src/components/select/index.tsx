import React, { FC } from "react";

import "./select.css"

interface SelectProps {
	label: string;
	value: string;
	options: Array<{ label: string; value: string; }>;
	onSelect: (value: string) => void;
}

export function Select({ label, value, options, onSelect }: SelectProps) {
	return (
		<label className="select-label">
			<div className="select-label-text">{label}</div>
			<select
				className="select-select"
				value={value}
				onChange={(e) => onSelect(e.target.value)}
			>
				{options.map((option) => (
					<option className="select-option" value={option.value}>{option.label}</option>
				))}
			</select>
		</label>
	);
};