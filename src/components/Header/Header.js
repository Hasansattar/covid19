import React, { useState } from "react";
import c from './../../pics/c.gif'
import t from './../../pics/t.gif'
import f from './../../pics/f.gif'
import sys from './../../pics/sys.jpg'
import sym from './../../pics/sym.png'


import {
    AppBar,
    Toolbar,
    Typography,
    Button,

} from "@material-ui/core";
import { GitHub } from "@material-ui/icons";

import Modal from "react-modal";
import "./Header.module.css";


const Header = () => {

    const [symptoms, setsymptoms] = useState(false);

    return (
        <div className="navbar">
            <AppBar

                position="static"
                style={{
                    backgroundColor: "#1a1919",
                    color: "white",
                    borderRadius: "15px",
                }}
            >
                <Toolbar>
                    <img src={c} alt="ca" style={{ width: '50px' }} />
                    <img src={f} alt="fe" style={{ width: '50px' }} />
                    <img src={t} alt="te" style={{ width: '50px' }} />

                    <Typography variant="h6" style={{ flexGrow: 10, fontSize: 30, fontWeight: 800, textShadow: 'red' }}>

                        COVID 19           </Typography>
                    <Button onClick={() => setsymptoms(true)} style={{ backgroundColor: '#e73d1f' }}>symptoms / Precautions</Button>

                    <Button style={{ backgroundColor: 'white', borderRadius: '20px', fontWeight: 800 }}
                        startIcon={<GitHub />}
                        href="https://github.com/Hasansattar"
                    >Hasan Sattar</Button>
                  
                </Toolbar>
            </AppBar>

            <Modal
                isOpen={symptoms}
                onRequestClose={() => setsymptoms(!true)}
                style={{
                    overlay: {
                        position: "fixed",

                        backgroundColor: "rgba(255, 255, 255, 0.75)",
                    }, alignItems: 'center',

                    content: {
                        position: "absolute",
                        top: "10px",
                        left: "350px",
                        right: "350px",
                        bottom: "10px",
                        border: "1px solid #ccc",
                        background: "#fff",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch",
                        borderRadius: "15px",
                        outline: "none",
                        padding: "20px",
                    },

                }}
            >
                <h2>symptoms / Precautions </h2>
                <img src={sym} alt='symptoms' />
                <img src={sys} alt='symptoms' />
                <div>
                    <button
                        onClick={() => setsymptoms(!true)}
                        style={{
                            backgroundColor: "#e73d1f",
                            fontWeight: 600,
                            padding: "10px",
                            borderRadius: "5px",
                        }}
                    >
                        Close
            </button>
                </div>
            </Modal>

        </div>
    );


}
export default Header;

