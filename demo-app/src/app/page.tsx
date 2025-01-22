'use client';

import Image from "next/image";
import styles from './page.module.css';
import React from 'react';
import {Button} from 'intricate';

export default function Home() {

  return (
    <>
      <Button className={styles.button}>Button</Button>
    </>
  );
}
