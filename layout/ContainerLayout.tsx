

import type { ReactNode } from 'react';

const ContainerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-2xl px-4 2xl:px-0 2xl:mx-auto">
        {children}
    </div>
  )
}

export default ContainerLayout