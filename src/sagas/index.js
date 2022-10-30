import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_PERSON,
  ADD_PERSON_FAILURE,
  ADD_PERSON_SUCCESS,
  GET_ALL_PERSONS,
  GET_ALL_PERSONS_FAILURE,
  GET_ALL_PERSONS_SUCCESS,
  GET_PERSON_BY_ID,
  GET_PERSON_BY_ID_FAILURE,
  GET_PERSON_BY_ID_SUCCESS } from "../actions/types";