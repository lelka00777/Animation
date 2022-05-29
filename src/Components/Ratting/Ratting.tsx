import React from 'react';

type RattingPropsType = {


    value: 0 | 1 | 2 | 3 | 4 | 5
}



const Ratting = (props:RattingPropsType) => {
    console.log("Ratting rendering")

    if (props.value === 1) {

        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 2) {

        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 3) {

        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 4) {

        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 5) {

        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        );
    }

    type StartPropsType = {
        selected:boolean
    }

    function Star(props:StartPropsType) {
        console.log("Star rendering")

        if(props.selected ===true){
            return <span><b>star</b></span>
        }else {
            return <span>star</span>
        }


    }



    };






export default Ratting;