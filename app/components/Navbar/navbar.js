"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import * as React from "react";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";
// import './globals.css'
import { Noto_Sans_Thai } from "next/font/google";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-geist-noto",

  subsets: ["thai"], // important: use 'thai'
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // pick weights you need
});

export default function Navbar() {
  const [lang, setLang] = React.useState("th");
  const handleChange = (event) => {
    setLang(event.target.value);
  };

  const languages = [
    {
      value: "th",
      label: "ไทย",
      icon: "/images/icons/flagth.png", // store in public/flags/
    },
    {
      value: "en",
      label: "English",
      icon: "/images/icons/flagen.png",
    },
  ];
  return (
    <div className={styles.navbar}>
      <nav className={styles.navlarge}>
        <div className={styles.flex}>
          <Image
            src="/images/icons/logo.png"
            alt="Logo"
            width={81} // set your image width
            height={40}
          />
          <div className={styles.item}>
            <ul className={notoSansThai.className}>
              <li>หน้าหลัก</li>
              <li>สินค้าทั้งหมด</li>
              <li>กระเบื้องลายหินอ่อน</li>
              <li>กระเบื้องหินขัดสำเร็จรูป</li>
              <li>กระเบื้องคัสตอม</li>
              <li>เปรียบเทียบ</li>
            </ul>
          </div>
          <div className={styles.icons}>
            <Image
              src="/images/icons/search.png"
              alt="search"
              width={33}
              height={33}
            />
            <Image
              src="/images/icons/user.png"
              alt="search"
              width={33}
              height={33}
            />
            <Image
              src="/images/icons/shop.png"
              alt="search"
              width={33}
              height={33}
            />
            <div className={styles.flag}>
              <FormControl sx={{ minWidth: 120 }}>
                {/* <InputLabel id="lang-select-label">Language</InputLabel> */}
                <Select
                  labelId="lang-select-label"
                  value={lang}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    "& fieldset": { border: "none" }, // 👈 remove border
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" }, // extra safe
                  }}
                  renderValue={(value) => {
                    const option = languages.find((l) => l.value === value);
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          fontSize: "17px",
                        }}
                        className={notoSansThai.className}
                      >
                        <Image
                          src={option.icon}
                          alt={option.label}
                          width={22}
                          height={22}
                        />
                        {option.label}
                      </Box>
                    );
                  }}
                >
                  {languages.map((lang) => (
                    <MenuItem key={lang.value} value={lang.value}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          fontSize: "17px",
                        }}
                        className={notoSansThai.className}
                      >
                        <Image
                          src={lang.icon}
                          alt={lang.label}
                          width={22}
                          height={22}
                        />
                        {lang.label}
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </nav>
      <nav className={styles.navmedia}>
        <h1>dskfdlko</h1>
      </nav>
    </div>
  );
}
