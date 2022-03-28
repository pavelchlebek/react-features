import "../styles/Navbar.css"

import React from "react"

import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">First</Link>
      {/* <a href="/">First</a>*/}
      <Link to="/bootstrap">Bootstrap</Link>
      {/* <a href="/bootstrap">Bootstrap</a> */}
      <a href="/bootstrap-layout">Layout</a>
      <a href="/refsScreen">Refs</a>
      <a href="/refs2">Refs2</a>
      <a href="/effect">useEffect</a>
      <a href="/effectWindow">EffectWindow</a>
      <a href="/callback">UseCallback</a>
      <a href="/memo">UseMemo</a>
      <Link to="/customHooks">Custom Hooks</Link>
      <Link to="/wdsCustomHooks">WDS Custom Hooks</Link>
      <Link to="/useReducer">useReducer</Link>
      <Link to="/todosUseReducer">TodosUseReducer</Link>
      <Link to="/sentence">Sentence</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/reducer">Reducer</Link>
    </div>
  )
}
