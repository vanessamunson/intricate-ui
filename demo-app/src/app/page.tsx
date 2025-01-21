'use client';

import Image from "next/image";
import styles from './page.module.css';
import React from 'react';
import {Button} from 'intricate';

export default function Home() {

  // Test button styles to put into the Button component
  const testStyles = {
    borderRadius: '10px',
  };

  return (
    <Button style={testStyles}>Test</Button>
  );
}
