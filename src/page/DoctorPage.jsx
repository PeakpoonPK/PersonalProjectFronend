import React from 'react'
import SideBarAdmin from '../layout/SideBarAdmin'
import MainDoctorProfile from '../layout/MainDoctorProfile '

export default function DoctorPage() {
    return (
        <div className="flex flex-col">
            <div className="fixed top-0 left-0 right-0 ">
                <SideBarAdmin />
            </div>
            <div className="pb-24 h-full bg-slate-50">
                <MainDoctorProfile />
            </div>

        </div>
    )
}
