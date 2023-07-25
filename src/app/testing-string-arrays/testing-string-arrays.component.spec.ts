import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingStringArraysComponent } from './testing-string-arrays.component';

describe('String Matcher' ,() => {
  it('Testing String using "toBe" Matcher: ', () => {
    
    let myString = "Shaik Roshan"
    expect(myString).toBe("Shaik Roshan")
  })

  it('Testing String using "toEqual" Matcher: ', () => {
    
    let myString = "Shaik Roshan"
    expect(myString).toEqual("Shaik Roshan")
  })

  it('Testing String using "toContain" Matcher: ', () => {
    
    let myString = "Shaik Roshan"
    expect(myString).toContain("Shaik")
  })

  it('Testing String using "toMatch" Matcher: ', () => {
    
    let myString = "This is my 1st project"
    expect(myString).toMatch(/\d+/)
  })

})


describe('Array Test', () => {
  it('Testing Array using "toEqual", means Arrays should be equal', () => {
    let x = [1,2,3]
    expect(x).toEqual([1,2,3])
  })

  it('Testing Array using "toContain", means Arrays should contain expected element', () => {
    let x = ['abc', 'def', 'ghi']
    expect(x).toContain('ghi')
  })

})