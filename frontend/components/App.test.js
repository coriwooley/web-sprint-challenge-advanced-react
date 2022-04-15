import React from 'react'
import {render, screen,  fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AppClass from './AppClass'


const heading = () => screen.getByText('Coordinates', {exact: false})
const leftBtn = () => screen.getByText('LEFT')
const rightBtn = () => screen.getByText('RIGHT')
const upBtn = () => screen.getByText('UP')
const downBtn = () => screen.getByText('DOWN')
const resetBtn = () => screen.getByText('reset')
const emailInput = () => screen.getByPlaceholderText('type email')


beforeEach(()=> {
  render(<AppClass />)
})

describe('AppClass component', ()=> {
  test('Renders without crashing', ()=> {
    screen.debug()
  })
  test('All elements visible', () => {
    expect(heading()).toBeInTheDocument()
    expect(heading()).toBeTruthy()
    expect(heading()).toBeVisible()
    
    expect(leftBtn()).toBeInTheDocument()
    expect(leftBtn()).toBeTruthy()
    expect(leftBtn()).toBeVisible()

    expect(rightBtn()).toBeInTheDocument()
    expect(rightBtn()).toBeTruthy()
    expect(rightBtn()).toBeVisible()

    expect(upBtn()).toBeInTheDocument()
    expect(upBtn()).toBeTruthy()
    expect(upBtn()).toBeVisible()

    expect(downBtn()).toBeInTheDocument()
    expect(downBtn()).toBeTruthy()
    expect(downBtn()).toBeVisible()

    expect(resetBtn()).toBeInTheDocument()
    expect(resetBtn()).toBeTruthy()
    expect(resetBtn()).toBeVisible()

    expect(emailInput()).toBeInTheDocument()
    expect(emailInput()).toBeTruthy()
    expect(emailInput()).toBeVisible()
  })

  test('Check if email input works', () => {
    fireEvent.change(emailInput(), {target: {value: 'coriwooley@gmail.com'}});
    expect(emailInput()).toHaveValue('coriwooley@gmail.com')
  })

 
})