import React from 'react'
import styled from 'styled-components'
import { StyledInput } from '../RegisterForm/RegisterForm.styled'
import { StyledButton } from 'components/Counter/Counter.styled'

const skilsList = ['all', 'react', 'angular', 'vue']

export const EmployeeFilter = ({ onFilterChange, filterStr, openToWork, onChangeCheckboxFilter, activeSkill, onChangeSkill, toggleModal, }) => {
	return (
		<Filters>
			<h1>Filters</h1>
			<StyledButton 
			size = '1rem'
			onClick={toggleModal}> 
				Open Modal
				</StyledButton>
			<Flex>
				<StyledInput 
        type='text' 
        onChange= {onFilterChange}
        value={filterStr}
        />
				<label htmlFor=''>
					<input
						type='checkbox'
            checked={openToWork}
            onChange={onChangeCheckboxFilter}
            />
					<span> isAvailable</span>
				</label>
			</Flex>
			<Flex>
				{skilsList.map(radioButtonName => (
					<label key={radioButtonName}>
						<input
							name='radioButtonName'
							type='radio'
							value={radioButtonName}
              checked={radioButtonName === activeSkill}
              onChange={()=>onChangeSkill(radioButtonName)}
						/>
						<span> {radioButtonName}</span>
					</label>
				))}
			</Flex>
		</Filters>
	)
}



const Filters = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #cbd3ff;
	font-weight: bold;
	font-size: 1.5rem;
	margin-bottom: 20px;
`
const Flex = styled.div`
	display: flex;
	padding: 20px 15px;
	gap: 10px;
	flex-direction: ${props => (props.column ? 'column' : 'row')};
`

