export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="70"
      height="20"
      fill="none"
      viewBox="0 0 144 44"
      className="lg:w-[144px] lg:h-[44px]"
    >
      <path fill="url(#pattern0)" d="M0 0H144V44H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.00246 0 0 .00806 -.005 0)"
            xlinkHref="#image0_64381_760"
          ></use>
        </pattern>
        <image
          id="image0_64381_760"
          width="410"
          height="124"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZoAAAB8CAYAAABQbHZIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFMTNCMzU1OTg2OEYxMUU2ODRGMUMxNENBREI1QTU3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNkNFMjg3OTAzOUExMUVBQjAyNUVCRkU5QjE2MDU2NyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNkNFMjg3ODAzOUExMUVBQjAyNUVCRkU5QjE2MDU2NyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJkNmZmOGJlLTM2ODgtNGVjMS04NjFhLWY5MmU4MDhlZjRlMCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmI1MzcxMWE4LTMwMDYtMzc0Ni04N2FhLTVmN2Y3Y2IwNTgxYSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvmH3rMAACJISURBVHja7F0J2F3T1V75kiARFRqECJ+pRU0xVAga1BC0hpgbhJ/WTEurVdqkit8cQ8VU8iMSMcZYlVZEzEEiSGJqjK0aIjFn+v79Pmfd9ubLHfbaZ+9z9rl3vc+zHm2+M+579l57Te/q0NbWRgqFQqFQhEKLDoFCoVAoQqJTA73LKkY2NrKekV4svY2sZORbRpYwskyZcoUpN8fIPCOfGfnAyDtG3jfyrpEZRl408pZ+JgqFQuGODgV1nS1lpK+RHxrZmhXM8oHuNdvIVCOPGxlvZKKRz/XTUSgUisZTNLBYBhrZx8hWRpbM6TlgAT1j5D4jtxl5Qz8jhUKhKK6igZVysJEDjPTD80b4jM8bGWNkBCXuN4VCoVAUQNF838ixRvY30qUgYwlL5y4jw408SkkMSKFQKFTRRKRoYK3sYeS3RrYs+Li+ZORstnQW6memUChU0eSvYPY1crqRTRpsfF8zco6Rm43M189NoVCooske2xq52MjmDT7OLxv5lZEH9JNTKBSqaLLBqkYuNfIjI/808o2Rr4wsx9Kt4OP6pZFZLJ0pScde2cgEI8cYeV0/PYVCoYomLKBMkFE208iCCn9f1sh3jKxLSWIAZFOKr8AU8ZcplKQ7Q16hxF32cYVjUSiKAtIvjHykn55CoVBFEx9Q1b+9kZ2N7E1JXU0e+NDIvZS4wf7OVotCoVAoGkDRLPLclGSmHWjkICMrBr7fp5RkkI2khCFggX46CoVC0diKphxwp+1OSd3Nzp6v/RgldTF3UhJHUigUCkUTKppyrMMKZ7CR7o7XQAwF6chXUkKqqVAoFApVNIsBWWtHGznFSE/LcxDAv5zlE/00FAqFQhWNDUC8eTglxaC9qxwDfrLzjVxDysqsUCgU0Ssa9HxZwcjXVDnFNy/guVC/8htK+tMAs1nBXBaZgunOFtlHPI4KhUKhioZxpJFhRpYusxT+amSUkYcoDs4vpEifRkkjtCEUh4sMGXQ/MPITI7tSUswKzKWE9+1C/UwVCoUqmmSRvJGqt4Z+gxfMP1PCcqxIxgrtD84wsn6N4041cpEOl0KhaGZFg2ZkY2oomXKgav6XRsY2+bij8PQSSjqD2uAoI9fp56pQKJpR0aCdMqrjpT1j7qEkDfm9Jhvvb1NCInqo8Dy4HdFC4UH9ZBUKRTMpmjUo4ffq4Xj+HFY2I5tkrFFUegMlyRIuQH3PdpR09FQoFIrCoMXxPAT8x6ZQMgAC8iiMvIWSIH2jAszNVxi5L4WSKY35nWwVKRQKRcNbNFAOB3l8jlcpIcp8pcHGd3Ujt5Pffjt/M7ILKd+aQgGgFOB7RtYysibPOWzouvAmD0zwaEGCUoHZ/L9nGnmTZTo1nwu/EIrmp0auDvAscA2huPK2BhnbnYyMpqQdgm8MMTI0onddh/6b1m4DpJW/HeFv1ktodWLRmlHj71jk1ojgvb5mQW1W0YuSu/FGCyUB/ShJqOmY8pr4Fiey3B/g24QSlHhtPmVlGBvAmC8hMAY/5DQXRbOekUlGugZ8md8bOctIkSkLUBx6uYcJUA2wZhCveSKS993fyK3CiYS23W9F9JuhkPdF4UTCpuvaGn/fy8hdkX2bX/K4v8zvC+LYpyju4mDMIyTDDDayGyUF2CGBNQ7lGnDt+2gD8mOSZdpi092HkizdWACX/RTejNniRF4HRYqmE3+Qm2XwUnDNHUHFY0zGhLiYBzg0/mFkA144YgAW3CMFxz/Bu9L5MVj2Rv5CMvbv21jBUsEUTTXLDDHEkbyjnx/Jc3VhZf5zSlxieSjlEUbO82DlYME9XnA8kn62oqRwO4b5cTcrTFugZ9eeJYNBkgxwSkZKBjiYElaBZQukZGDl3Z6RkgHgkvljRO9/MiX+bltszdZrDDhVqGTe4gWwUYAFfT9eTKbzu3XM8Xla2HpBofewnJRMaU4jM/Z1fo7uKa71S5KxwaOj8LmRfB/HCpXM+2wo/MeKsbVo1jYylZLgWpbADwNaln9GPlGX5R3hNhnfdyHvep6JZBzgL3+aEjJT2+ff0cj4HJ95c7auOlseL3FbFsWiqYQXKCkUfi7j+6J9+/X8XceGD3kjOdrxfJfQwwC2tvPCRry+SOb0D4080n7nYINhOSiZ0ks+wYouVsBnOTEHJVP6/a5g0zYGTOGdm+T54QfPK2V7GV40OgvO+T3FExsLCcQInqSk3UZWwL0mR6pkACSKjOJvxsXbMo0tfwkQK1opR4tutEDJAP/bXsnYKhpYFLvn+OO2GplgZMMIPzwQYD5KSawkL2xh5LCIxgSK716hor4+J2WJ5nZrCY4fzxOpWQAFPDyDd16SF9ThwkUtLxzAlsl6DucilinJrF2BxyaP+TFM+I5PUhV3eD1Fg7/HQOi4MiVUNzEpG1hZjwsXqlA4h+Q0QKEAXyz8s+8LzoH/99iMn/MQI4MEx3/Mxzdj/RIYz38X6NqwDB7m36NIwPxHclR/h3MRA5NkXCJ+eGrG74eY3VGC41GjhNj6fBdFA1bm9SP5YXuwZbNlJB8ZdrerRTI2K+ewUNfCR7woS1pDYEOzUYa/35XCc6A8m7mwD3Vb+3i+Znee09sWdEzAbvIQyQLlwKe8KEs2LWeT38LvWkDyxTUOynNmtT/WSgZAOvP0SHbs5fhNBO6LwZTwlsUE7LhbKa6CPEyO0wXHT+PJFDJlGzUYiLFIMijhDjzB4V5FTgaoBBTawpXybw/XQnxsnJHve3q2D1hp4RtClti7lNSjzC1TarCewB7wHUpczn3InYarHPNY2UiD9ug3JckcfYOf+bOAvzHWfYQDthacc10966eWooHGjY3w8m7eVcVQzHmVkZ9FNj6x9a7pxJNfEty9lsKmDl8gdEO8yFa0S0GjRNG8Q2HcU6UFdiX2TmBhT+NmHUEJg0fa7wJZmrukvA4KGm+ipKxgmsP5GBfEoMGmvjM/lyuw+CMbcbLgnI6sbPsLzkHyTEg3I4rlzxAcP503h1+4KhqkNW4a0aI1lbVsLDt27Iwf5o8rFrzDO7b5ET1TK08+SZYOCiFDUBHtItx1fsmTaJrj/SSKBhl7m2TweyzJ44BN0m4O58Pdsy5bDa5AUfPPU5yPFPoh5DftdzW2vuEi7ex4jbd4zZR07u3Fv70k8/JQVrC+AYX3N4GV9w1vwqbUO7DaBXeITMmABmJPisstBJN8XzbRY0FvSoJ4MWGmg4UC/7DvIj3s6G8UnnNyCiUTK7A4oB8UMknBzPCm8Hzswo9Pcf+BKZQMYn+IG/cl/7UlqPw/mpXoOMdrrM4KQJIh9h4rNwkQX/Rd8vFttpYkrsRf2iiZWorm6IgmRht/XP+IcNJ+yBNnbkTP9LMIxwkdWCUdQuHuuSWlK2MRy52VjITHDBbVtdTYgFsTsSppwe9B5MYc0CvFmCLovj5/FyEBxQs32nHk1nYeVuIxwnOg+K8QHA9i0dHkj/MN8+N6kvGY3Sd55kqKpgeb/LEA2S4xd5bEJD0poufBLvW7EY5TnhQ1zU4xUwvIgBpAMrZgKOw+DvfCTnw5h/MuZgvswww3t3jWHdmKkuI89i5IIKWowQbhbE/vK6WYAVPL4SSIlVdSNAg0dY5kEsA8PqsAk/UqkrtlQuLwCMcIwcIDSUaUCp95/5T33Vw4IRGDOJgX4GbBJw6KVZqSvBfJ04CBP1DCs5hH/RKYrXdwUDbdWDlK8DXPD0nGJTZQaRMqUFIgSSCCchkkHZNKiuaASD7+91jpLSzIZMWuIJbGbftFOkZZU9QoxYw9kNgySXC8pL4OLp7zHZ7pIsqfeHUqKxtpSjHit1JaqqwpalwpZv4uvVF7RYPMixgKIhewdv+oQBMVO/b9KQ7afmSe9Y10nLKkqFGKGRkkPYVaBcci2L2Og+I7LZJxmeroJXBhV5dS1KxI7hQ1UooZMCE4peC3VzT7RPLDIo97YgEnKppJHRfJs+wZ6RhlRVEjpZj5hJqXYqZ8IbGFbawFCR2/Fj4HYgAHR/Zb3GHkUuE5PyA3st0sKGqkFDNzqAbFjFTRDIjgB0UfmvMKPFlHUByFrgMiHqPQFDVKMeMGSW2MbUbg3iRPVT85Um8GKvmlDdBcUrlDU9S4Usw4Z/6WK5qurIHzXoAGU7HbOBPvvvNOx0ZvmFUiHqNHhBsK+JFHU/1eHkvwcd0E14ZSGksKCfuBbeqvNNUXacxjIh0fuMelGabwLPR0uBfihJL4VGf+7pex2CAgRVzSxA2u61vTDFy5otmK8qfoPoLib3Jma2bG4IbpH/k4wd8rcdfAnzzMYmcn4TGD//0U1TEiKwWYbXFMq5HtHayGmAEarBcEx6PeyJUyBvHC8YLj17Kw5KG8JDxmM8hD1+ByRdMv5x8QvSjubaBJix3JkJyfYZvIx2g+uwjmCM6BX7laVh1SPSW+6q8oSTr5mhQk3HnbuBml9XiwZp4rwDhJSy5c6xIX8Ib1Y8E5g2ooNmw8JSS3c3l+fNEoimZGg+4qz6V8U2X7FWCM4GL0QVHjSjHzCilKWFdwrA31iLRuZlhBxmksyeJ5yADt4XgvXxQ1rhQzk30MWPlNN8vpRytp7a8ycg1cQgnFf5eM3m2wjx2BI75HxehYCP/v9YLj21PUuFDM3E7ygGijQ7IxmWTxG0mKOpGF+HBBxmkhL9qSdTZNl2JQ1PxJcHx7ihoXipn7jVzua8BKimYVyq9v+9kkKxRzBXa843gXi8V/IvknbqwEUJn/KqexhX94/YJM3hPZsrVFOUWNlGLmbWoeihnJJmxfy2NBBfN4nWO2I1nM5xYqVmr5KOHxO6S8H77xqYLjyylqXChmsEZ6S8oqKZqNcvqxnie3oiYptmBlVp5Vtynff8cM7j88x93axgWZuCWKGglBKfzNvyA3iplZqlsWAcZ+VYE1WE8pSAu/HyzYeE0hWeJS2u6YJYoaiecHygkhieAUM7aKZu0cfigsKIeRG0OqBKjWn1BlEi1PSd3OMYGfAT8eKotn5zDOaxdo8sIfLKWowSSSUMwMtdiNNxvgcrxAoKhteLwkrvivCvqbSNoJIP61dMr7IZ4opai5kDKgmLFVNGvm8CMhc+OlwPfAjhf+/6XqjMGVvGB1DPgs7wkXUV9oLdjkhV/4/kDXRovac1SvLAI0pEO2p23GGWITNoWdEkWDRmbfFHDsJMqxhfzEwa9hizIEnClmbBVN1osRzM6Q1f8Igo0gmUsFLhjQTHQN+FzXhdgt1MGaBZu8sP4Gk/96KqWYWRyonXuWkvbOtmNoQycDT4Eky2pyQcdvqvD4dTzdF/HFtz2/SyqKGVtF0zPDHwcTHel6oVxmqIx9gBK3nBR78q53hYCL6JGULfHmigWcwCWKGp8MEfjm3iUFNmHIgEIm0xOCxa+N59S/LI5dzWHj2QyKZjVP951F/rngUlHM1EMpKyTLjDPQhT8f6NpQEA+mNFE3Z5N4J5IR29kCPyaqny/JaLxXKOgkhuUHf/FvPFwrBMUMivDq0XhI2qEvz5acTyB2tSwLNhyIEyAxxiW1H0Hl+wItqK8X9BtF64B/CzZzvT3eG2sU4o1/8HCt1BQz9dChra2ttIPMQtmgTeoGFKZmppWSzC5fwW/EVAY47FpsgFjQU5Q+E0Wyi51XwImMjRCaT6VpeYDfD64hn9X/+4eemBEBNSMghrxMcA7SaSV1H2vx2lBEwO1nm9mJ9Wlnz+vI3ygdR+UM3pgHrfUruc66ZfSjHBtIyWzIGt5nhhWKm5CttlWA54XJezRl19Rt6YJOYheKmnKEoJjBhqZZCj0Rk/mRUMm4eEiKzJotiSUuH2AdGcS/kwu8UczYKposqsfRzOehANeFewJulhBMxd15x7BDgGs/J9z1pd35FBUuFDUl+KaYKTHfLtsESgYWG5glHnC0oG3xDRUz46wESclC5wD3R9zxCMdzvVHM2Cqa0IAv86QA10VRGOjmewR8dviz4ZveJcC1z6Bs2KqXoWIDtPGvOew0/+z5OYYGsnBjAyyMu8i9aE/yvRWd0FTy/KE2KIg/Sl38IOq8OqtBykrRnBlgQYVfEsWW38rg+aFsUGvwY8/XhUvoF6SoB4yRNDV0ZfLbbx50979ukvGG2xhcWdON/ITkbYKXEhz7RcHHShIKWCLQMyAksaHwHLg3/5jVIGWhaKaRfxcRXFkPZqRkys3e2wMoG7goHotoMsQGBCrPdTwX2X3beXgGWMw3U3Ybs1iwFr/3BKGil6Tddir4GHUMNC62gIK52PFcUNTsksUgtQQcgBKQseKzCAhK5j7Khn05C2WDtL+TKGxX0aL6wEsstJ1TfN+IqaQJwpaYb1eh5gX6GsGXv5/l8RK+uiULPjYSK8V35mcXnh9pxlDKep5K0Xwa6PooCvOZAICYzF05KZmQygYd+64N+MyfFXQSV+qrIUUvkrUgaI/jKcm8anaAMWMMbxzrQRIgX7rg4yJ5/jme743+PWnZ2VdkZdMh5CCV6mheZzPZJ+bxIPgqxoKSySomY7trQ52NL0oZ/OCvkv+A4edUzGQAxAZu9ni946h+m9v2aDXyF5LFHNovzisI5sv7AccT30B38uP+Q0xgeI2/g2NQQv8Ey7WosRqsSTtZHvsMyVmtq2Eg+eU8gxvtolCDVPKPfhRA0fzJo5LZJDIlUzKZ4cIDnccjHq6HCmNUwp/r+Tk/LODkxbd4ledrwo+NWJgkO2cmybpOtsdebIHb4BX+zkN7MOACXI+S7LndHBe+K/h5H63y94+F1wOz+gwqJlYVHPuxp3uCeeE6z++BdWc8BWqlXdrd+OaA+ky4o6mFtSNUMiXAhXc3+etOemmAXe0/CzZx4ZocTf6LiJfk63ah5sVCnuuoUAd1SV9WpOg42yZcN26qYSlLqZt6FXhMJbE7H0SYSD64herTH8Uy74IqmgvIT+OcXjwpYubrggKEe8UHMyuyw4Z4fr6iEUligxKKmgeu3GGkKAcsCRT8bSfclIC368wqf3tH+AzfKejYwd0tcXX7UDRI2e8X6H2wqb8yxIVLiuYNj9cEu6sPwsjleAFvLcAHh/TXcUIzuhpu8OxGeLVAExc8UJKePVDMe5AsyAqWgYGqXxbDRFY2/xKccwJVzliSLqgbF3TMpLUraRUNfp/fCo5HHBmJLBKKmkMoiY8GUTQ+FyMUAX2e8hoIooL6YoMCfXTwmyLDLi2f0fwaO0UXFIUZt5T9IgEoZu4nOUXNdeSPsr2RgG/lAMHxSJI4usK/w3Uu4S/rU9DxksbU0tAhYV25hWTJHL+iJI4spahBfNRrzL7FwwC0t2auT3kN+CBHUjrG3rwA1wxiNmkrgNGAbZqnZ3q5AOPWgZXMSoJzkHFTIre8VfjddedJW2QOuFCYwGNji2q732cE10CMs4iZkRLWZFgXaZjg8X1LYlnYqJfIUEFRI3GJpa1fq6po4FP1kRFxHqWvQkd8Z68CT9RtKXF/pclLR9DWR58JFOK+VIAxA8WMpEL57QpWzIkkcznCz/17UlSCxPWN+EqlWidJ9hKyX3co2BjhmfsLjn+R3As2kU6+p+B4xNoG06IJHqcIFR3ipL4SuhYxw9I2I0PwPy1JG4rjft4AExXU9melvMYYSu/2gjUTO2mhlGJmAY/vrHb/jjqMA0lWle6LoqbRMIlkSSTbprRogD0KNkbbCa2wZx3vI6WYgXI5lBYva/ia54fEEEC81Ev/nHJF83jKa12U0prBh3ZpA01WLGKHp7Rq0u4onoh8jFxM9KE1vtXJJEsm8EFR06h4SnDsRhX+DckFkpblaCZXpNTzQcLjH3S4hwvFDLxK46r8DSGSk4XP4IWixpeiwW5yeIrz0fdiFDUeaSEsvG1SnI9F8F8pzp8Y+fhIKWZQIHhOnWMupyRBwBZpKWoaFRJrulK2JTadDwuugTKBfQoyNkhW2k9w/Nc1Fv9akFLMPG3kd3WOQVxTwiiwEnmgqGmvaFzJF/Egsx3PRRrzWMquy2eWKPGiuRakzaV0ee2PRDw2CCIfIjj+E95F1iOAhetgMMlqQuD/PlZ1yyL4QHBstTq3e4T3PJUCc255wk+F69U4knt7BpIsmxIp/nApz7N8fkmqNeKnqdqZtLTbgbjS1V/meF6pynWtBp6w2BHcSe58WVeTLO5QAgJ/70c6Ji4UM/9D9nEDxAsPJVm1O/zgG5LCJ+4hWQB8E5IFvfMA3FinCc+RcpK5UMwgzfxNy2NnsVKSsPYjjurMgNLeVeXSthW1I9Md7w83yK5NMOG+T+7cXeBAG+1w3v2RjoUL1QXcsncL74Nd5HnCBaTZKWrKIWElnl9D4d/jsCYsEfG4IFmpp+D4z4WKxoViBlmuo4TvAQ/W0MDztqqiucPhGq4L6N6UFBQ1Cw6jysVtocb4rkjHQUox81IKsx3+6qcFxytFzX+xhuDYWm0oLhfeF4SfsXYyXZPqx0AqKQEJM7WUYgbF9iem2Og/KjjemaKmvaKB326S4PxPHK2g1ak5A7BYxFzcM0+SLDiL3/HZCN9fSjFTSsl0TdGexy4CpaiRYwvBsbVYALCQSRmBTxfePwt0YqUhsXgXCDcuLhQzB5I7EwuebxBlQFFTKctL0gNkDMnjB53YBOvehJMX7pnbyK3Zk+R3AbNCW2Tv7koxk5bZ4E0HS7LZKWpaqXLKcq0xroUzHOYJ3E09IhqT80lec3Uz2cdNXChmECt6IeV7Ie4ZnKKm0kvhZW1bL9/k8GLgQuvbxJP4u5T085BipODYGyN7ZxeKGSRQXO3p/qN4N2qLZqeoOUF4/OQ6fwc5rjTRCIoe8Z2uEYzHMSQvJIcVPkRwvAvFjK+6w+AUNZUUDSpKbfz76DnxpPCFdqTmistUw2AjBwnPgevMptoaXFXTI3tfKcUMKJGO9PwM8GNLyGOblaIG/WmOExyPTelTluO/QPgsaM4GUsg8EzTgJvqTw3mg8ZlpeawPipm0AEWNhK5KRFFTzUyz0W73Cl+0G7skOpCC2KrpKTzHJoNneGTvKaWYASNCJYqZtIAfWylqagO9VZAQJKlEH092DACTya19yPaUtEtfKYfxQFLCTQ5rFtqu2FJQ+aKYSQuXeKg1RU1LjY9nioXpJgFSTVtVv/wHy5PchVZvzOFvvTOid3SlmAnFaAB/tqQGopkoauCqQuB+feF5EqZnZGy5xNz6sjW/bUZjAdfpSN4gSZXMQrY2bAo0fVPMpAV+myAUNbUCT+fX+BtMYInPdXvSyutKQHaThMpiSp2d/iXkVtwZClKKmcfII2NsFVwq3CQ1OkUNalYQkwG7sLQBGRjfbxMcj8X3IJJxoLVXhJdSuESiDjwnX2ar2gV/FGyUQlDMpMXVws2qFUVNLUUzhqp33nyB7FPqoLX/rDql5mJsu2PGbunxGpP+mojeS0ox41Kt7AKlqEl20LAOQISLVHgweyzrcJ0LSZ5aC8aKIxyfG4sZYj0zKQm0+2rxjqQPdKJEGjay3VZxvM4DZF8ECV63UBQzaYH4qKQdd12Kmg5tbTXDLJiQN1TRerYpo+irciYp6u0ibMdzaJVdzWl1rNAsgdRH+OQlVcQo4L07w2f8oZG/Clwj4AHcgmQ9PdBXybZwFlX0IwO9KxRLV16YYRmgh0zaplbYhKIDrmuN0+kerFckIjzIVhV4/SStDbAB3tLI7pTUkvRM+SywCBHPs+F87M3eieUE14eSGZXh/NiGLUjbdGsowK2oSs1UPUXTwgP4vXb/jr4xNpkYrZR0ilyKFPV22cjisOkJNJAWp7QAp9nalL7pnA9gAXuCZNX/w3OyGOCDl1Shv8LvZTvOEkVTJMCyRgbp+JTXQRDcZ/+pmfwbIUPzPf6dwFqwBCtaxBJQLI4Sg43IXwdJKN3+loquI4+bhNX9hhRWYBr8jmQ0NRj3PhWtXCiaOrJr2+IYYHEe5OY2hS3GWY5pnwrnDrY8Nws5X/jeU40sldOzdjbylPB5rxZcf68G/VZP8TT+2OheUfCxeNXIqoJ3HiK8/gwj3XKaHx2NTBA+742VrmVjFv2FFm/aY+Pf7kPuAbVmBHaINqmC7fvTwFSNpUBzJ0qo3m2RlmImLZSiRg5kPV3k0ZKHd+Ssgo4FaJ76CVx2iItJwghpKWbSolo321qoSFFj6387od1iYOOHPJO0ZkYKmwLBOe1cGEfzf/NGiWJG8pv7oJhJC1eKmt5N+H0OpTCEl3DRDKL4246XA/G0H5B9PUteFDNp4YWixval4YP8Q7udSC2sy/5phQxbU/1agXK/MphxJ0Xw3FAuI0gWUPVJMZMWSlFTG7N4Pg8JvHCjncb0yMcCTMxHsWKUxESxOVlVcLxPipm0QJKOpBB8sfo5iXa9gP6bUfDtOscep9aMM06q8/cS9xMCb6dH8swI6A4QHB+CYiYtpBQ121BzZFPexBvHsRncCxl9aH6GbLR5EY4FWlNvSPKmZOBK21twfAiKmbRA+rIzRY1E0SCV8BA2b1trHIe0wUNVXzgDO8dalbboiVGqPv4ygufdlOKgmEkLF4qaMym7avUsMZctjA14Lv87w3sjjfwMvvfYSMZjGisKxFD/ITwX7xEDxUxapKKoaXEYcOy4t6pxzB5GvqX6whlwx+xf4+992YXxeATPWjKRJR0RQ1LMpEUzU9Rg04LEH8SrVqbENZRn/OxV3nRtyt/YghyeYRIvrlAWLjVeJYoZSXlHSIqZtHCmqKlXR1MNoJR5pMrf/k8tGi8merUMtB0oKaRaEMFzjqCkc6gtHuNvZ0HEYw+XLxiDdxOcg1qZfapYp7HU0UCRzOP/ou7qA0pir1g8UCv3HMVFX9QePVn5YeHfLOB9UH9zB69jz6e8Flg/jhEc/zRbyPMobtxR5XuvhodcFU0tIEuhFynS4Cu2CufrUCgUiwHrCzK+ECfrxxZHi+O13mcLuyRgtGjTIfa8e/OsaOBC+FiH1Qs2oPxTfxWKIgDZTaj4R/xyDV6HuvBmrStv3EoyizfDb7LM0eELj06er7e6Dqk3rKaKRqGwAlxNr7MoIkSL5+tpEoA/LKlDoFAoVNEsjo90SL3hMx0ChULRCPAdo0GaK3ygXXVoUwE/yoqquBUKhVo0iwPpkWN0WFPjr6pkFAqFWjTV0UpJ/vlyOrxOQOUtOJ+m6lAoFAq1aCpjJiXsAB/q8IqBuMw+qmQUCoVaNPaWzb2U1IMo6uMtVtAv6VAoFAq1aOwtG3Ci3aLDXBdoLLepKhmFQqGKRg4w4qLbGvh+vtLhXgygmAHV/+5GPtHhUCgUjYiQrrP2+K6RmynpU6AgmsFK+DkdCoVCoRaNv4UVrrRfN7l1AysG/Vs2USWjUCjUogkH9JO+jGRU7I0A0OSj+6hmlSkUCrVoAgN9MBCX2JWagzgS74tmZtupklEoFKpossVDRjaipKHRGw04vu9QkgixvpHb9HNTKBTNiLxcZ5WAlgX7UdJnuk/BxxXxqAspaWM6Vz8zhUKhiiY+oHseepcPpKSpURGwkJIWwFexpbZQPy+FQqGIV9GUsIKRAyhxrW0Z6TNOMTKSksLU9/STUigUimIpmnKg4+SPWbY1slROz4Fufk9SQq8z1shr+hkpFApFYyiackDJ9DXSnxKm4y2M9Ah0r9lGnjXyjJEJlKQof6mfjkKhUDS2oqmEXkbWoyTDa3W2gHpT0q5geSPdKUk4KAfiKLNYQAHzLiWZYiC4nGbkFf7/bfqpKBQKhSoahUKhUESIFh0ChUKhUITE/wswALou9GvqzmanAAAAAElFTkSuQmCC"
        ></image>
      </defs>
    </svg>
  );
}
