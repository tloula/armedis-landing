"use client";

import Clarity from '@microsoft/clarity';
import { useEffect } from 'react';

import { siteDetails } from '@/data/siteDetails';

export default function ClarityInit() {
  useEffect(() => {
    if (siteDetails.clarityId) {
      Clarity.init(siteDetails.clarityId);
    }
  }, []);

  return null;
}
