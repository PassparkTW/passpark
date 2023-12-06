// src/components/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import GenerateImage from '../components/GenerateImage';
import { generateImage } from '../actions/actions';

const GenerateImageImpl = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setLoading(true);
    (async () => {
      const { image, statusCode } = await generateImage(data);
      if (statusCode === 200) {
        navigate(`/article/${image.id}`);
      }
      setLoading(false);
    })()
  }
  return (
    <GenerateImage onSubmit={onSubmit} loading={loading}/>
  );

}

export default GenerateImageImpl;