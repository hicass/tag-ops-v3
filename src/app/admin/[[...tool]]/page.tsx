'use client';

import Head from 'next/head'
import {useEffect, useState} from 'react'
import {NextStudio} from 'next-sanity/studio'

import defineConfig from '../../../../sanity.config';

export default function IndexPage() {
  const [config, setConfig] = useState(defineConfig)

  useEffect(
    // Start fetching the theme in parallel with the Studio auth loading
    () =>
      // The webpackIgnore tells webpack to not attempt bundling this dynamic import,
      // and instead let it run natively in the browser at runtime
      void import(
        /* webpackIgnore: true */ 'https://themer.sanity.build/api/hues?default=6126d8&primary=392365;950;darkest:d0b2ff&transparent=2a374b;lightest:e2f4ff;darkest:f5eefe&positive=lightest:fff&caution=lightest:fff&critical=lightest:fff&lightest=ffffff&darkest=392365'
      ).then(({theme}) => setConfig(config => ({...config, theme}))),
    []
  )

  return <NextStudio config={config} />
}