import React from 'react'

function formatNumber(precision: number, number?: number | string): string {
    if (typeof number === 'number') {
      return Number(number.toFixed(precision)).toLocaleString('pt', {
        minimumFractionDigits: precision,
      });
    } else if (typeof number === 'string') {
      return Number(parseFloat(number).toFixed(precision)).toLocaleString('pt', {
        minimumFractionDigits: precision,
      });
    } else return '';
  }

export default formatNumber