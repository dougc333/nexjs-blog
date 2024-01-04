
import React from 'react';
import styles from './Alert.module.css'
import {clsx} from 'clsx'

export function Alert({children, type}){
  return(
    <div
      className={clsx({
        [styles.success]:type === 'success',
        [styles.error]:type === 'error'
      })}
    
    >
      {children}
    </div>
  )
}