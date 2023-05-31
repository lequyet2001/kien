import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';




export default function Form() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const handleEditorChange = (newEditorState) => {
        setEditorState(newEditorState);
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: 'center',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    height: '800px',
                    border: '1px black solid',
                    backgroundColor: '',
                    width: '60%'
                }}>

                <Typography variant="h2" sx={{ marginTop: '20px' }}> Thêm quán</Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: 'space-between',
                        width: '80%',
                        // backgroundColor:'grey'
                    }}  >

                    <Box sx={{ display: "flex", alignItems: 'center', }}>
                        <Typography variant="h5" sx={{
                            paddingRight: "5px", 
                        }}>Tên quán</Typography>
                        <TextField sx={{backgroundColor: 'grey'}}></TextField>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: 'center', }}>
                        <Typography variant="h5" sx={{ paddingRight: "15px" }}>Dịch vụ</Typography>
                        <Select sx={{
                            width: '223px', backgroundColor: 'grey'
                        }}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </Box>
                </Box>
                <Box id='1' sx={{
                    display: "flex",
                    justifyContent: 'space-between',
                    width: '80%',
                    // backgroundColor: 'grey'
                }}  >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            // backgroundColor: 'red'
                        }}>


                        <Box sx={{
                            paddingTop: '30px',
                        }}>
                            <Typography variant="h5" sx={{
                                paddingRight: "5px",
                                paddingBottom: '10px',

                            }}>Giờ mở</Typography>
                            <Select sx={{
                                width: '143px', backgroundColor: 'grey'
                            }}>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Box>

                        <Box sx={{
                            paddingLeft: '70px',
                            paddingTop: '30px',
                        }}>
                            <Typography variant="h5" sx={{
                                paddingRight: "5px",
                                paddingBottom: '10px',

                            }}>Giờ đóng</Typography>
                            <Select sx={{
                                width: '143px', backgroundColor: 'grey'
                            }}>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>

                        </Box>

                    </Box>
                    <Box
                        sx={{
                            // paddingLeft:'546px',
                            // paddingTop:'45px',
                            display: "flex",
                            alignItems: 'center',
                            // width: '100%',
                            // backgroundColor: 'green',
                            // paddingBotton: '30px'
                        }}>
                        <Typography variant="h5" sx={{ paddingRight: '20px', }}>Địa chỉ</Typography>
                        <TextField sx={{
                            width: "223px", backgroundColor: 'grey'
                        }}></TextField>
                    </Box>

                </Box>
                <Box
                    sx={{
                        width: '90%',
                        display: 'flex',
                        justifyContent: 'flex-end',


                    }}>

                    <Typography variant='h5' sx={{ paddingTop: '30px', paddingRight: '20px' }}  >

                        Hình ảnh
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            height: '160px',
                            border: '1px black solid',
                            width: '320px',
                            botton: '20px',

                        }}
                    >
                        <Box
                            sx={{
                                border: '1px black solid',
                                width: '100px',
                                height: '100px', backgroundColor: 'grey'

                            }}
                        >
                            <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>
                                {selectedImage ? (
                                    <img
                                        src={selectedImage}
                                        alt="Selected Image"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : null
                                }
                            </label>
                        </Box>
                        <Button
                            sx={{
                                border: '1px black solid',
                                width: '100px',
                                height: '100px',
                                backgroundColor: 'grey'

                            }}>
                            <AddIcon sx={{ fontSize: '100px', color: 'black' }} />
                            <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleImageUpload}
                            />

                        </Button>
                    </Box>

                </Box>
                <Box sx={{
                    width: '80%',
                    paddingRight: '40px',
                    // height: '200px',
                    // border:'black 1px solid'
                    display: 'flex',
                    justifyContent: 'space-between'
                }}

                >
                    <Box sx={{
                        width: '600px',
                        height: '350px',
                        border: '1px black solid'
                    }}>

                        <Editor
                            editorState={editorState}
                            onEditorStateChange={handleEditorChange}
                        />
                    </Box>
                    <Button
                        variant="contained"

                        sx={{
                            // position: 'absolute',
                            top: '310px',
                            left: '90px',
                            height: "40px",
                            font: 'inherit',
                            // :'solid',
                            color: 'black',
                            backgroundColor: 'yellow'
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </>
    )
}   