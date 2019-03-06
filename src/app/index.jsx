import React, { useState } from 'react';

const pages = [
  '001_01.gif',
  '002_01.gif',
  '003_01.jpg',
];

export default function () {
  const [page1, setPage1] = useState(0);
  const [page2, setPage2] = useState(1);

  function toPrev() {
    setPage1(page1 - 1 < 0 ? pages.length - 1 : page1 - 1);
    setPage2(page2 - 1 < 0 ? pages.length - 1 : page2 - 1);
  }

  function toNext() {
    setPage1(page1 + 1 >= pages.length ? 0 : page1 + 1);
    setPage2(page2 + 1 >= pages.length ? 0 : page2 + 1);
  }

  return (
    <table width="100%" height="100%" border="0" cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td>&nbsp;</td>
          <td width="1010">&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr height="697">
          <td>&nbsp;</td>
          <td>
            <table width={1010} border={0} cellPadding={0} cellSpacing={0}>
              <tbody>

                <tr>
                  <td colSpan={7}>
                    <img src="layout/layout_01_01.gif" width={1010} height={39} />
                  </td>
                </tr>

                <tr>
                  <td>
                    <img src="layout/layout_01_02.gif" width={31} height={15} />
                  </td>
                  <td>
                    <img src="layout/layout_01_03.gif" width={20} height={15} />
                  </td>
                  <td>
                    <img src="layout/layout_01_04.gif" width={430} height={15} />
                  </td>
                  <td>
                    <img src="layout/layout_01_05.gif" width={48} height={15} />
                  </td>
                  <td>
                    <img src="layout/layout_01_06.gif" width={430} height={15} />
                  </td>
                  <td>
                    <img src="layout/layout_01_07.gif" width={20} height={15} />
                  </td>
                  <td>
                    <img src="layout/layout_01_08.gif" width={31} height={15} />
                  </td>
                </tr>

                <tr>
                  <td>
                    <img src="layout/layout_01_09.gif" width={31} height={592} />
                  </td>
                  <td>
                    <button onClick={toPrev} style={{border: 0, padding: 0, margin: 0, outline: 0}}>
                      <img src="layout/layout_01_10.gif" width={20} height={592} />
                    </button>
                  </td>
                  <td width={430} height={592}>
                    <img src={`diary/${pages[page1]}`} width={430} height={592} />
                  </td>
                  <td>
                    <img src="layout/layout_01_12.gif" width={48} height={592} />
                  </td>
                  <td width={430} height={592}>
                    <img src={`diary/${pages[page2]}`} width={430} height={592} />
                  </td>
                  <td>
                    <button onClick={toNext} style={{border: 0, padding: 0, margin: 0, outline: 0}}>
                      <img src="layout/layout_01_14.gif" width={20} height={592} />
                    </button>
                  </td>
                  <td>
                    <img src="layout/layout_01_15.gif" width={31} height={592} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="layout/layout_01_16.gif" width={31} height={12} />
                  </td>
                  <td>
                    <img src="layout/layout_01_17.gif" width={20} height={12} />
                  </td>
                  <td>
                    <img src="layout/layout_01_18.gif" width={430} height={12} />
                  </td>
                  <td>
                    <img src="layout/layout_01_19.gif" width={48} height={12} />
                  </td>
                  <td>
                    <img src="layout/layout_01_20.gif" width={430} height={12} />
                  </td>
                  <td>
                    <img src="layout/layout_01_21.gif" width={20} height={12} />
                  </td>
                  <td>
                    <img src="layout/layout_01_22.gif" width={31} height={12} />
                  </td>
                </tr>
                <tr>
                  <td colSpan={7}>
                    <img src="layout/layout_01_23.gif" width={1010} height={39} />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table >
  )
}