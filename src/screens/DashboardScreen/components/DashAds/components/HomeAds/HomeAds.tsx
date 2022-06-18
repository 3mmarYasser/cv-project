import React from 'react';
import {useSelector} from "react-redux";

const HomeAds: React.FC = () => {
    const lang = ((useSelector((state: any) => state)).lang).value;

    return (
        <>
            <h1 className="text-2xl md:text-3xl">{lang === "AR" ? "إعلانات الرئيسية" : "Home Ads"}</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">AD ID "1"</span>
                    <span className="label-text-alt">Customize ADD "1"</span>
                </label>
                <textarea className="textarea textarea-bordered h-24 textarea-ghost"
                          placeholder="HTML AD CODE"></textarea>
            </div>
        </>
    );
};

export default HomeAds;
