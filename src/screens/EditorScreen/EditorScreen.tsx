import React,{useRef , useState} from 'react';
import {Template} from "./EditorScreen.service";
import EditRender from "./components/EditRender/EditRender";
import JsPDF from "jspdf";
import html2canvas from "html2canvas";
// import Styles from './EditorScreen.module.scss'

interface Props{

}
const EditorScreen :React.FC<Props> = () => {

    const {data , loading ,err} = Template();
    const render = ():JSX.Element=>{
        if(loading)return <p>Loading</p>
        else if(err) return <p className="text-red-500">{err}</p>
        return <EditRender data={data} />
    }
    const editorRef = useRef <HTMLDivElement |null>(null);
    const [image , setImage]=useState<string>("")

    const DownloadPDF = ():void =>{
        const input:any = editorRef.current;

        html2canvas(input).then(canvas => {
            const imgData = canvas.toDataURL("image/png");
            setImage(imgData)
                const pdf:any = new JsPDF();
                pdf.addImage(imgData, "JPEG", 0, 0);
                pdf.save("cv.pdf");
        });
         }
    return (
        <div className="pt-[100px]">
            <div className="content_color pt-[40px] w-[100vw]">
                <section className="w-[100vw] justify-center flex mb-5">
                    <button  onClick={DownloadPDF} className="self-center btn btn-primary text-primary-content px-10">Download</button>
                </section>
                <section className="flex flex-col items-center justify-center">
                   <div className="shadow">
                       <div className="w-[930px] h-[1330px] min-w-[930px] min-h-[1330px]" ref={editorRef}>
                           {render()}
                       </div>
                   </div>
                    <img  src={image} className="mt-[20px]" alt={"Show PdF"}/>
                </section>
            </div>
        </div>
    );
};

export default EditorScreen ;
