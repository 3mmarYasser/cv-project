import React from 'react';
import Styles from './TemplateScreen.module.scss'

interface Props {

}

const TemplateScreen: React.FC<Props> = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Upload Template</h1>
                    <p className="py-6"></p>
                    <button className="btn btn-primary">Upload</button>
                </div>
            </div>
        </div>
    );
};

export default TemplateScreen;
