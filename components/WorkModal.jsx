'use client'
import "@styles/workmodal.css";
export default async function WorkModal({ title = "default", image = "default", description = "none", url = "none", isActive = false }) {

    return (

        <div className={`work-modal ${isActive && "active"}`}>


        </div>

    );
}