"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";

const BannerImageInput: React.FC = (): React.ReactElement => {
  const [bannerImage, setBannerImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBannerImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result as string;
        setBannerImage(imageUrl);
      };
      reader.onerror = () => {
        console.error("Error occurred while reading the image file.");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBrowseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <label htmlFor="bannerImage" className="md:text-lg lg:text-xl">
        Banner Image:
      </label>
      <input
        ref={fileInputRef}
        type="file"
        id="bannerImage"
        accept="image/*"
        onChange={handleBannerImageChange}
        className="hidden"
      />
      <section
        onClick={handleBrowseClick}
        className="flex flex-col justify-center border-[1px] border-none mt-2 w-full px-6 py-10 bg-dark-blue rounded-lg font-extralight max-w-2xl md:py-20 md:text-lg lg:py-40 lg:text-xl items-center"
      >
        <div className="flex items-center gap-4 w-full justify-center">
          <button className="bg-white text-main-blue rounded-md px-2 font-light border-[0.0625rem] transition hover:bg-main-blue hover:text-white hover:border-white md:px-4 lg:py-1 active:bg-dark-blue">
            Browse
          </button>
          <p>or drag and drop an image here</p>
        </div>
        {bannerImage && (
          <div className="self-center mt-4">
            <Image
              src={bannerImage}
              alt="Banner"
              width={100}
              height={100}
              className="w-64 h-auto"
            />
          </div>
        )}
      </section>
    </>
  );
};

export default BannerImageInput;
