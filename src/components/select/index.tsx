import React, { FC } from "react";

import "./select.css"

interface SelectProps {
	label: string;
	defaultValue?: string;
	options: Array<{ value: string; label: string; }>;
	onSelect: (value: string) => void;
}

export function Select({ label, defaultValue, options, onSelect }: SelectProps) {
	return (
		<label className="select-label">
			<div className="select-label-text">{label}</div>
			<select
				className="select-select"
				value={defaultValue}
				onChange={(e) => onSelect(e.target.value)}
			>
				{options.map((option) => (
					<option className="select-option" value={option.value}>{option.label}</option>
				))}
			</select>
		</label>
	);
};