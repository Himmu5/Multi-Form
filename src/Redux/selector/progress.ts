import { createSelector } from "@reduxjs/toolkit";
import { State } from "../store";

function getProgressState (state:State){
    return state.progressReducer;
}

export const getBasicDetails = createSelector(getProgressState , (getProgress)=>{
    return getProgress.BasicDetails;
})


export const isSavedBasicDetails = createSelector(getProgressState , (getProgress)=>{
    return getProgress.BasicDetails.save;
})

export const isSavedAddresses = createSelector(getProgressState , (getProgress)=>{
    return getProgress.addressDetails.save;
})
export const isFileSaved = createSelector(getProgressState , (getProgress)=>{
    return getProgress.singleFileUpload.save;
})

export const pageSelector = createSelector(getProgressState , (getProgress)=>{
    return getProgress.currentPage;
})  