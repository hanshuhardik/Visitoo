import React from "react";
import Button from "@mui/material/Button";
import { HiOutlineMail } from "react-icons/hi";
import { TbPasswordFingerprint } from "react-icons/tb";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Login(props) {
  return (
    <div className="flex justify-center mt-5">
      <div className=" flex flex-col">
        <div className="flex justify-inline m-2 ">
          <span className="text-4xl mt-3 mr-3 text-blue-500">
            <HiOutlineMail />
          </span>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-required"
              label="UserName"
              defaultValue="username"
            />
          </Box>
        </div>
        <div className="flex justify-inline m-2 ">
          <span className="text-4xl mt-3 mr-3  text-blue-500">
            <TbPasswordFingerprint />
          </span>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
            />
          </Box>
        </div>
        <div className="flex justify-center m-2">
          {/* <button className='button w-40 mt-1 h-auto rounded-xl bg-blue-500 text-white font-bold text-3xl'  type='button'>
               
                </button> */}
          <Button variant="contained" size="large">
            Login
          </Button>
        </div>
        {/* <Link
          to="/Register"
          className="text-xs flex justify-center font-thin text-slate-400 "
        >
          don't have an account?
          <span className="cursor-pointer hover:text-blue-600">
            Register Now
          </span>
        </Link> */}
        <p className="text-xs flex justify-center font-thin text-slate-400 ">
          don't have an account?
          <span
            className="cursor-pointer hover:text-blue-600"
            onClick={(e) => {
              props.getInfo(true);
            }}
          >
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
}
