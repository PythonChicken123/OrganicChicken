/**
 * Copyright (c) 2020 Apple Inc. All rights reserved.
 * 
 * # Sign In with Apple License
 * 
 * **IMPORTANT:** This Sign In with Apple software is supplied to you by Apple Inc. ("Apple") in consideration of your agreement to the following terms, and your use, reproduction, or installation of this Apple software constitutes acceptance of these terms. If you do not agree with these terms, please do not use, reproduce or install this Apple software.
 * 
 * This software is licensed to you only for use with Sign In with Apple that you are authorized or legally permitted to embed or display on your website.
 *
 * The Sign In with Apple software is only licensed and intended for the purposes set forth above and may not be used for other purposes or in other contexts without Apple's prior written permission. For the sake of clarity, you may not and agree not to or enable others to, modify or create derivative works of the Sign In with Apple software.
 *
 * You may only use the Sign In with Apple software if you are enrolled in the Apple Developer Program.
 * 
 * Neither the name, trademarks, service marks or logos of Apple Inc. may be used to endorse or promote products, services without specific prior written permission from Apple. Except as expressly stated in this notice, no other rights or licenses, express or implied, are granted by Apple herein.
 * 
 * The Sign In with Apple software software is provided by Apple on an "AS IS" basis. APPLE MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, REGARDING THE SIGN IN WITH APPLE SOFTWARE OR ITS USE AND OPERATION ALONE OR IN COMBINATION WITH YOUR PRODUCTS, SYSTEMS, OR SERVICES.  APPLE DOES NOT WARRANT THAT THE SIGN IN WITH APPLE SOFTWARE WILL MEET YOUR REQUIREMENTS, THAT THE OPERATION OF THE SIGN IN WITH APPLE SOFTWARE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS IN THE SIGN IN WITH APPLE SOFTWARE WILL BE CORRECTED, OR THAT THE SIGN IN WITH APPLE SOFTWARE WILL BE COMPATIBLE WITH FUTURE APPLE PRODUCTS, SOFTWARE OR SERVICES. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY APPLE OR AN APPLE AUTHORIZED REPRESENTATIVE WILL CREATE A WARRANTY.
 * 
 * IN NO EVENT SHALL APPLE BE LIABLE FOR ANY DIRECT, SPECIAL, INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) RELATING TO OR ARISING IN ANY WAY OUT OF THE USE, REPRODUCTION, OR INSTALLATION, OF THE SIGN IN WITH APPLE SOFTWARE BY YOU OR OTHERS, HOWEVER CAUSED AND WHETHER UNDER THEORY OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR OTHERWISE, EVEN IF APPLE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU. In no event shall Apple's total liability to you for all damages (other than as may be required by applicable law in cases involving personal injury) exceed the amount of fifty dollars ($50.00). The foregoing limitations will apply even if the above stated remedy fails of its essential purpose.
 * 
 * **ACKNOWLEDGEMENTS:**
 * https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1.4.2/acknowledgements.txt
 * 
 * v1.4.2
 */

! function(e, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((e = e || self).AppleID = {})
}(this, function(e) {
    "use strict";
    var n = function(e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            t || (t = "");
            var i = "";
            for (var o in n) n.hasOwnProperty(o) && (i += " " + o + '="' + n[o] + '"');
            return "<" + e + i + ">" + t + "</" + e + ">"
        },
        t = function(e) {
            var n = "";
            for (var t in e) e[t] && e.hasOwnProperty(t) && (n += " " + t + ": " + e[t] + ";");
            return n
        },
        i = {
            "sign-in": {
                text: "Sign in with Apple",
                boundingBox: {
                    x: 0,
                    y: -11,
                    width: 111.046875,
                    height: 14
                },
                fontFamily: "SF Pro Text",
                rtl: !1,
                letterSpacing: "-.022em"
            },
            continue: {
                text: "Continue with Apple",
                boundingBox: {
                    x: 0,
                    y: -11,
                    width: 123.6875,
                    height: 14
                },
                fontFamily: "SF Pro Text",
                rtl: !1,
                letterSpacing: "-.022em"
            }
        },
        o = function(e) {
            return "number" != typeof e || isNaN(e) ? "100%" : Math.floor(e) + "px"
        },
        A = function(e) {
            var A = e.color,
                r = void 0 === A ? "black" : A,
                c = e.type,
                d = void 0 === c ? "sign-in" : c,
                a = e.border,
                s = void 0 !== a && a,
                u = e.width,
                l = e.height,
                p = e.borderRadius,
                f = i[d],
                h = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "black",
                        t = i[e],
                        o = t.text,
                        A = t.rtl,
                        r = t.fontFamily,
                        c = t.boundingBox,
                        d = c.width,
                        a = c.height,
                        s = c.y,
                        u = c.x;
                    return '\n  <svg xmlns="http://www.w3.org/2000/svg" style="pointer-events: none; overflow: visible;" width="100%" height="100%">\n    <g>\n      <svg xmlns="http://www.w3.org/2000/svg" style="overflow: visible;" width="100%" height="50%" y="25%" viewBox="'.concat(u, " ").concat(s, " ").concat(d, " ").concat(a, '" fill="#').concat("black" === n ? "fff" : "000", '">\n        <defs>\n          <style>\n            ').concat('\n  @font-face {\n    font-family: "SF Pro Text";\n    src: url(data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAABRMABEAAAAAIawAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHUE9TAAATFAAAALsAAAHIbUB2PEdTVUIAABPQAAAAZQAAAIxKSyvpT1MvMgAACjgAAABNAAAAYHLeeipic2xuAAAUOAAAABMAAABI/ykCnmNtYXAAAAqIAAAArAAAATzUgYTCY3Z0IAAAEagAAACGAAAA/h4jsglmcGdtAAALNAAABcMAAAviP64gqWdhc3AAABMMAAAACAAAAAgAAAAQZ2x5ZgAAAYAAAAfMAAAMDN+ERypoZWFkAAAJlAAAADYAAAA2FZUeyWhoZWEAAAoYAAAAIAAAACQQagbMaG10eAAACcwAAABMAAAATFWqCFBsb2NhAAAJbAAAACgAAAAoG5oe821heHAAAAlMAAAAIAAAACABaQyMbmFtZQAAEjAAAADFAAABhhtRNi1wb3N0AAAS+AAAABMAAAAg/tsAmnByZXAAABD4AAAArgAAAMdYpaDHeJzVVm1QVOcVPu/HvcvytXvdvbvoooG9sGtKQGVZKCXoIhGVxUJipCy7iEQsEhH50GD4GBVWg6KTmcRak6owdWS0DqBNNJlMWhs/8kOnsTZNmTo1an+YjvVHbSft1LDQc++yBC12+rezn+85573vc855zjkvUCgCEFYKx0EHMVDkPZNeVuGRgQMQDq8ApVu8AqOENJESG8oppy0RpSZvJSU+TzxAtB4foJMkSYy1piWzZKYQFyH4y/3B0M3d96j+IdWHWn9L3r9BdozvEo4/quJHQ8foK0CgfeKWEBA+hVSoD5+fCpTh04UmEDgTeCMwRvxASJsXOAe/SAC2A+JRnrQjgJjY+imrDkB0JgLJSXNtssloiNFDKknVxZrTBLvDQd1Zs7KzXZnzqFXJoIpdFGWzxeLKzM7OccUzJhx6+LPKylMPD7VdH6iNvy2/+pPq7o/r6n7RXX2k3nzbUHvs18rGKyRhZIQkfLpx5Z4PGit6Vuz5+tTJr/cUtL20aaTrBQwTNE/c4pfRt0yoCvuWAowDZ9CkBZE0Ilbqxzijb4QIfhCE7QK6Zn/SjOKK8vURow4BPdNnKOYMxSjGzkkzueZRFbk7y+F0OhzurMX0Cces1nlUNouigp43f6kPHKypPPBi8M2PLn/o7fvktcaP9r0o3Iwp6365Yndxx4H+gx+W9/7r9MDfDpDgCxtycms9qzfa0zMu9q871pyf33jYv7TG7a4pWLUu2WnfdLRh39XNG3+JEH848Re+lJdDFCiw2JMHVBAFKjZhHARKhBodpoT70eN2L4gi82NeO1gJAXtSos0qG+Ki9QKHKBIVhQkiiFqXnEFNrniqQnZnqamyWGQ5WdZcpf7SjmKROlhh28fXrbsudR25295x993Df9g2NsFW7iyvCbL+oh1r1uwoCr1Rc2BV79jw8MT+4D9Oe2PX7S/B3FDYML6Or+WrwQAuEuM9k4jZiX6OEDGRCECLbdpCF174wurvANJMYBw9IqJfR0Sx3RuFTmkpafJqudQTSjtpiS2c7oypHTpdi1fbBv9914L/ZVfr47s8aVMbOMo4rX7qRuSNz+exSUYCCzKedSY/M9sqm40uyaXXgYEYojH0qWEeOSIVYcLwO11aZbjdSphBkXRYXW6XhKyitYHg8uXBQKC7sLC7uvfa9tg/xvds3vNj46Lh5r6rmxuv9Xl31z0jfdbxp6s/GNjcMFBRMdCA36FDJfuq8pa/3nDDt/aNvx8f/OfeBeV5w9+c7zpfq1bPIPKlVLgPFmg6xwgjpNh7xo7xsQJAszfSFtq9AqeUNk0F3fqtBg2pb0o9s6aVYkw8cSiwgEUxp2APS0jDiEiuScpJipQVjoY0+IU0/1TH1pP+0baWinaPcD90MlBXfX5XqIDu6w4u63opFERm9SD4t0U8DEzw6iRkAXOlUf519egWLyfhrhppuQwNsH2tf0w5k1xtuT7PLCwViIvhJsGExzDELGuY2fRawcQM/H5T6uLUyJsXfHOBjzs8DqfH4fA48c//GVqNE6QLOcFgWRhrrEYG+hhAVUZ8Edm0ZRhONK5VGGwSxuCocP+RRWXcEWRcLnYwGRpUxoHKOCs+EGEz8BOiuvUfbFOFM5BxZs23bJNBVkxTbJPDbJtOtiPXjfN/2nH+0ujWttJtHl4w5K/7/GJoCe3r6SnsXBPqmey49YjXADZIV/vT1FmYQPDz8BBUq90qG22SLVzl4uQEnB56Z6Za9HgwljzdOHCvs/Or/mNfdXbe699/+PB+/Mi9obMj47294yNnQ70Xrvz87JUrZ9+7jBiOjB/iP8I+aoYUeMcTLREuxBDCaXG4ac7FtgN+JlKAdq+OcK4h7PDi0Ns61fGSETmGSrVUB/dMhmjzNDXzqdu1wFotMoF5iXKKJcVoiI9Df83ErA2UST+xezkVDLIWcNMTrY7e6Lu6pfHa3q1n0qTR68ZF5zMD3UVF3X5/z4rlQb5679jQUGhvTXnooXD6/ar6sYBvsLX1hK9ysKXlRCWyJ2/iET0tlEECBDzRsYTROIJTuzjMk0SVXy1qXohPRCpqzNDGYRNH756ubuU466Mlc6oiSUZdrA2HPaJXJLPakXPkyYYsKW7Xn0cfPCgum223zslL2v524dCQUDb+4FzoN2tKGX1PEPO662ndOTzmLWRNJi/AjKksBzbFco2h2skQUMneBFMsj6hQqFE6oAZfLa5pmtbpmkmWm8EcYTlBjOH54cai0+C7JZ55XZp/ovPcxdEtr3X3qSU/VLXh81/RS6FtwZ1v7aRdiLcAQHQgXgMs/SBOj+AomQyqAW9+TD09gvZxSat6AVRRGMBgkkxhFERhino/NYVfomP8i9t3pTu3xn9385Lxzmd3pIsqCmYf+5IXjH3ClqgfHBaETfxVeCQaIBe+D1HnivPtQBcirfCWFc9l8zxmRXbp1NuKeucK31qcGTRyFXNlLqZOVapdz7JzFtMclY/8qFTkW+tkSubCpGfz89OodUFq8oqX3fNzXUvS05fmfC9lUZnXmV78XGFz30pnkSc3wZq3rCxmzopSJSaaUHdy4qpyJ1vAD+oSl+TS2RlF1c8X1RdnyIQV1OYs9H3XlGAyzTFlV+YUnLpQ3TK87XmzzSzPlXclZc6lzKjPb3bYs5JI3Kz81n8DmAOACAABAAAAEwBqAAcAAAAAAAIALgA+AHcAAACpC+IAAAAAAAAAAAAAAEEArwEmAX0CTgKqAwEDWAOHA98EIQSmBPoFUgWVBZUGBgABAAAAAQAAhOuEOl8PPPUAAQgAAAAAANaoccYAAAAA1w1hff4i/eoKqAikAAAAAwACAAAAAAAACAAAYwIwAAAFjwBFBc0AeQU1AHAEqABlBPoAZAThAKUCFgCCAhYAggIjAKUEywCbBM8AZQT7AJsDDAA6BM4AkQZoAEACAAAAB0ABAnicY2BkYGCf90+IgYHb9J/S30Ku5QxAERQgDACBlAVKeJxjYGZ5xPiFgZWBgdWY5QwDA8NMCM10hmEWUy+Qz8DGAAeMDEjAMSDAB0gp/PjPPu+fEAMD+zzGdwoMjPNBciyOrItBcgzMANLgDugAAAB4nHXPTQrCQAwF4OdPFbSIPztXXfQi0iN4hlKEUlxY6lUU1F7BGyh4EL1Fd883M3Fp4CMNGZIUwBDAQFKE71RVT/mlPPF1DBctQrgqMe7dxvQlM27e1riZuYmkkJ2MpDRuTyV7mcpBaplJY+ZaGQVYAB0DLLXhqLzWC3dxomsybc61pdTEGk0SdST9zb9eoV6lPdbjh08+eGfLG6+88MzTOx6v/B/+iS+yhS92eJytVmlz01YUlbzFSchSstCiLk+8OE3tJ5NSCAZMCJJlF9zF2VoJSivFTrov0DLDb9CvuTLtDP3GT+u5km0MSdoZppmM7nnvHb27X5k0JUjb91xfiPYzbXa7TYXdex5dNmjND45EtO9RphT+XdSKWrcrDwzTJM0nzZGNvqZrTmBbpCsSwZFFGSV6gp53KLd6r7+mTzlu16WC65mULfk79z1TmkbkCep0sLXlG4JqjGq+L+KUHfZoDVuDlaB1Pl9n5vOOJ2BNFAqa6ngBdgSfTTHaYLQRGIHv+wbpFd+XpHW8Q9+3KKsE7smVQliWdzoe5aVNBWnDD5/0wKKckrBL9OL8gS34hC02Ugv4SYXA7VK2bOLQEZGIoCBez5fg5LYXdIxwx/ekb/qCtnY9nBns2kC/RXlFE06lr2XSSBWwlLZExKUdUubgiPQurKB82aIJJdjUaaf7LKcdCL6BtgKfKUEjMbWo+hPTmuPaZXMU+0n1ci6m0lv0Ckxw4Hcg3EiGnJckXprBMSVhwMihlciODBupiulTXqcVvKUZL1wbf+mMShzqT09lkWxDmn7ZtGhGxZmMS72wYdGsAlEIOuPc5dcBpO3TDK92sJrByqI5XDOfhEQgAl3opVknEFEgaBZBs2hetfe8ONdr+Cs0cyifWPSGam977d100zCxv5Dsn1WxNufse/HcnEN6aNNchWsWlWzHZ/gxgwfpy8hEttTxYg4evLUj5JfVlk2J14bYSM/5FbQC7/jwpAX7W9h9OVWnJDDWtAWJaDmkbfZ1XU9ytaC0WMu4ex7NSVu4NI3im5IoOFsEUP/X/LyuzWq2HQXx2UKFHleMCwjTInxbqFi0pGKd5TLizPKcirMs31RxjuVbKs6zPK/iAktDxRMs31ZxkeU7Kp5k+YGSw7hDNSIsRZX0B9wgFpXHDpdHhw/Tw8rY4ero8FF6+K7SaKbyGv69B//ehV0C/rE04R/LC/CPpYR/LFfgH8sS/GO5Cv9Yvg//WK7BP5ZKiXpSppaC2vlAOMht4CSpROsprtWqIqtCFrrwIhqgJU7JogxrkifivzIM9n59lFp9mS6W47y+5HoYZOzgh+OROX58SYkrib0fgae7x5WgO09Uzvva8p8a/zU2ZS2+pC/Bo8vwHwafbC+aIqxZdEVVz9Ut2vgvKgq4C/pVpERbLomqaHHjI5R3oqglW5gUHr4QGKyYBhu6vrQI/TVMqGU0F/4TCk06lcOoKoWoR7jr2otjUU3voBzuBEtQwLNia9t7mhFZYTzNrGbP+zbPzyJGsUzYsonOdV5tw4BnWPq5yDhBT1LWCXs4zjihARzw/Hr1nRAmYarLJnIooaEJvyASLbjvBCUynZQ5DAfEPo+Cyh+7FTeyR6XECDw76YR8oQspv84xENjJrw5iIOsIzY1km4poHiGassXKOFv1JGTswCCi2p5XFXV8XdniwaZgW4YhL5SwujP+IU8TdVIFDzIjuYxvDixwhqkJ+Ev/qovDVG5iHlQ5ak0M9bpfjav6Ihrw1mi7M7699TL7RM5tRbXKiZfaiq5VIijmYoG1xzlIS5WqoDqjChtGl4tLotSraJL0ugaGBub/a5Ri6/+qPjaf50tdYoSM5dv0Bza6HIyh/03235SDAAz8GLncgstLaXPilwH6cKFKl9GLH5+yfwczV19coCvAdxVdhWhz1FzEVTTxGRzG6RPF5UhtwE9VH3MG4DMAncHnqq8nOx2AZGebOS7ADnMY7DKHwR5zGOwz5zbAF8xh8CVzGHjMYeAzxwG4xxwG95nD4CvmMHjAnCbA18xh8A1zGATMYRAyxwY4YA6DLnMY9JjD4FDR9VGYj3hBm0DfJugW0HdJPWGxhcX3im6M2D/wImH/mCBm/5Qgpv6sqD6i/sKLhPprgpj6W4KY+lDRzRH1ES8S6u8JYuofCWLqY/V0MpcZ/vCyK1Q8pOxK58nwm2L9Aw8nY10AeJxj8N7BcCIoYiMjY1/kBsadHAwcDMkFGxnYnbZXpYW5GTGwMWiBeA58uRyxbL5slhzq7NIsbBxQwXK2VJZQFmc2A1ZFJrAgr9N+6QbxBuEGvgYuBnYGoHZOoKiw034GByQIFmVOcdmowtgRGLHBoSMCzFMD8XZxNDAwsjh0JIeABSOBwIEvnyOezZ/NmkOTXZaFjUdrB+P/1g0svRuZGFw2s6awMbi4AADrlS9DAAB4nGNgIBncBcJjDMdYShgY2Of9E2KZ+P8xiAaL72fYz7qYgYHFkYHh3zSQKOux/3dZwv6//leKrob1FYvj/3cIVaz/gere/esBq9sNhFMZpjL9Y3z+X/CfAkiMWZDx+3+mf5zI8mwHWFcyXWZ8BBJju8y6k+kI42ls9iC7hk0c4R4AmMtWvAAAeJyNj08LAVEUxX/DIGVtPQtbGv+iZmWjLNQUzcKWCTWMDPKVfBMfxodwzDwiKb3ePeeed+7tPKDEjDyWXQYC3YxbVNVlPEeFyPA8PmfDbWpcDS/gcDO8iGNVuEhp4dKkS92wnrQBO52IUHzEljmNVI10HPasWbLiQJJ2oTAUnlQXck4YSvelxMKp1LO84/R1zZHND4fz4fHUu8rUUF0IQ2XzXnn7yuvSUW0L/9kXpBkTdbF+9L37sSPb8Jyvv8/fASPuNJwAAAB4nGNgZgCDfzcYZjFgAQA4VwJ0AAABAAH//wAPeJyNUDEOwjAMPCcF2lQChPoAHsDICxBiYmRkQYiJqkPFAH9jZGIF8RIWxGAuKVI7dGhOsZ3zObINAeCwwBZ2uVpvkO0vZY5pvjsVmCFiFqrwqjqWRmxgj4eyQNa0TEq4EZLg46AEvRHjq2Uic6QE9Ko34q5ntB59tfMtyo8+O2sfXZW+A/b3bbzf1fzdav++ns4E+L2kGIfNWAyrTfLfHvoE6AdETJ0LuRFZIeNrPZvQOsauqvoB5z0tQgB4nGNgZGBg4GKIYihhYHZx8wlhEEmuLMphkMtJLMljUGJgAcoy/P/PAAPMjlGuCgxizkEhCgxyIUHeCgxqYHlGqDpGEAtMMzEw5+Qn5zCIIJNARYxgzAKlOYCYDawLyAYAAaIWnAAAAHicY2BkgAKmef81GMgGAGutAckA) format("woff")\n  }', '\n          </style>\n        </defs>\n        <text font-size="12px" ').concat("0em" !== t.letterSpacing ? 'textLength="'.concat(d, '"') : "", 'font-family="').concat(r, '" direction="').concat(A ? "rtl" : "ltr", '"> ').concat(o, "</text>\n      </svg>\n    </g>\n  </svg>\n  ")
                }(d, r),
                g = t({
                    "font-synthesis": "none",
                    "-moz-font-feature-settings": "kern",
                    "-webkit-font-smoothing": "antialiased",
                    "-moz-osx-font-smoothing": "grayscale",
                    width: o(u),
                    height: o(l),
                    "min-width": "130px",
                    "max-width": "375px",
                    "min-height": "30px",
                    "max-height": "64px",
                    position: "relative"
                });
            return n("div", {
                style: g,
                role: "button",
                tabindex: "0",
                "aria-label": f.text
            }, "\n    ".concat(n("div", {
                style: t({
                    "padding-right": "8%",
                    "padding-left": "8%",
                    position: "absolute",
                    "box-sizing": "border-box",
                    width: "100%",
                    height: "100%"
                })
            }, h), "\n    ").concat(n("div", {
                style: t({
                    padding: s ? "1px" : void 0,
                    width: "100%",
                    height: "100%",
                    "box-sizing": "border-box"
                })
            }, function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
                    t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return '\n  <svg xmlns="http://www.w3.org/2000/svg" style="overflow:visible" width="100%" height="100%">\n    <rect width="100%" height="100%" ry="'.concat(n, '%" fill="#').concat("black" === e ? "000" : "fff", '" ').concat(t ? 'stroke="black" stroke-width="1" stroke-linecap="round"' : "", "/>\n  </svg>")
            }(r, p, s)), "\n    "))
        },
        r = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = e.id,
                t = void 0 === n ? "appleid-button" : n,
                i = e.color,
                o = void 0 === i ? "black" : i,
                r = e.type,
                c = void 0 === r ? "sign-in" : r,
                d = e.border,
                a = void 0 !== d && d,
                s = e.width,
                u = void 0 === s ? "100%" : s,
                l = e.height,
                p = void 0 === l ? "100%" : l,
                f = e.borderRadius;
            ! function(e, n) {
                var t = document.getElementById(e);
                if (null !== t) t.innerHTML = n
            }(t, A({
                color: o,
                type: c,
                border: a,
                width: u,
                height: p,
                borderRadius: void 0 === f ? 15 : f
            }))
        },
        c = ["0", "0"],
        d = function() {
            for (var e = {}, n = 0; n < arguments.length; n += 1)
                for (var t = n < 0 || arguments.length <= n ? void 0 : arguments[n], i = Object.keys(t), o = 0; o < i.length; o += 1) {
                    var A = i[o];
                    e[A] = t[A]
                }
            return e
        },
        a = {
            isInit: !1
        },
        s = {
            baseURI: "https://appleid.apple.com",
            path: "/auth/authorize",
            originURI: "",
            env: "prod",
            usePopup: !1,
            responseType: "code id_token",
            responseMode: "form_post",
            client: {
                clientId: "",
                scope: "",
                redirectURI: "",
                state: "",
                nonce: ""
            }
        },
        u = "user_trigger_new_signin_flow",
        l = "popup_closed_by_user",
        p = "popup_blocked_by_browser",
        f = "AppleIDSigInLoaded",
        h = "AppleIDSignInOnSuccess",
        g = "AppleIDSignInOnFailure",
        v = function(e) {
            var n = "".concat(e.baseURI).concat(e.path, "?client_id=") + encodeURIComponent(e.client.clientId) + "&redirect_uri=" + encodeURIComponent(e.client.redirectURI) + "&response_type=" + encodeURIComponent(e.responseType);
            return ["state", "scope", "nonce"].forEach(function(t) {
                e.client[t] && (n = "".concat(n, "&").concat(t, "=").concat(encodeURIComponent(e.client[t])))
            }), n = (n = (n = e.usePopup ? n + "&response_mode=" + encodeURIComponent("web_message") : n + "&response_mode=" + encodeURIComponent(e.responseMode)) + "&frame_id=" + "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var n = 16 * Math.random() | 0;
                return ("x" == e ? n : 3 & n | 8).toString(16)
            })) + "&m=" + c[0] + c[1], n += "&v=1.4.2"
        },
        w = {},
        x = {},
        m = {},
        b = function(e) {
            w[e] && (w[e] = null), I(e, "closed"), m[e] && (clearInterval(m[e]), m[e] = null)
        },
        B = function(e) {
            return x[e] || (x[e] = []), x[e]
        },
        I = function(e, n) {
            B(e).forEach(function(e) {
                return e(n)
            })
        },
        C = function(e, n) {
            var t = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                i = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
            return {
                left: t / 2 - e / 2 + window.screenLeft,
                top: i / 2 - n / 2 + window.screenTop
            }
        },
        E = C(700, 700).left,
        y = C(700, 700).top,
        z = {
            strWindowFeatures: "width=".concat(700, ",height=").concat(700, ",left=").concat(E, ",top=").concat(y, ",resizable=no,location=no,menubar=no"),
            windowName: "AppleAuthentication"
        },
        D = function() {
            var e;
            w[e = z.windowName] && ("function" == typeof w[e].close && w[e].close(), b(e))
        },
        R = function(e) {
            return D(), n = e, t = z.windowName, i = z.strWindowFeatures, (o = window.open(n, t, i)) && (w[t] = o, m[t] = setInterval(function() {
                o.closed && b(t)
            }, 300)), o;
            var n, t, i, o
        },
        M = function(e) {
            return function(e, n) {
                B(e).push(n)
            }(z.windowName, e)
        },
        S = [],
        U = [],
        F = function(e) {
            var n = S.indexOf(e);
            S.splice(n, 1), U.splice(n, 1)
        },
        Y = function(e) {
            var n = S.indexOf(e);
            return U[n]
        },
        P = function(e) {
            return -1 !== S.indexOf(e)
        },
        G = function() {
            var e, n, t;
            return function(e, n) {
                S.push(e), U.push(n)
            }(e = new Promise(function(e, i) {
                t = e, n = i
            }), {
                reject: n,
                resolve: t
            }), e
        },
        L = {},
        X = s.baseURI;
    window.addEventListener("message", function(e) {
        try {
            if (e.origin !== X) return;
            var n = JSON.parse(e.data);
            n.method in L && L[n.method](n.data)
        } catch (e) {}
    }, !1);
    var N = function(e) {
            "dev" === e.env && (X = e.baseURI)
        },
        k = function(e, n) {
            L[e] = n
        },
        T = function(e, n) {
            document.dispatchEvent(function(e, n) {
                return new CustomEvent(e, {
                    detail: n
                })
            }(e, n))
        },
        Z = null,
        j = !0,
        H = !1,
        K = function() {
            return P(Z)
        },
        O = function(e) {
            T(h, e), K() && j && function(e, n) {
                P(e) && (Y(e).resolve(n), F(e))
            }(Z, e)
        },
        V = function(e) {
            var n, t;
            T(g, e), K() && j && (t = e, P(n = Z) && (Y(n).reject(t), F(n)))
        };
    M(function(e) {
        "closed" === e && H && (V({
            error: l
        }), H = !1)
    }), k("oauthDone", function(e) {
        ! function(e) {
            "error" in e ? V(e) : O(e), H = !1, D()
        }(e)
    });
    var Q, J, W = function(e) {
            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            K() && V({
                error: u
            }), j = n, "2" !== c[1] && (c[1] = "1");
            var t = v(e);
            c[1] = "0";
            var i, o, A = !!window.Promise;
            if (e.usePopup) {
                if (n && !A) throw new Error("Promise is required to use popup, please use polyfill.");
                if (R(t)) {
                    if (H = !0, n) return o = G(), Z = o
                } else if (T(g, {
                        error: p
                    }), n) return Promise.reject({
                    error: p
                })
            } else i = t, window.location.assign(i)
        },
        q = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
            ["scope", "state", "nonce", "usePopup"].forEach(function(t) {
                if (e[t])
                    if ("usePopup" === t) {
                        if ("boolean" != typeof e[t]) throw new Error('The "' + t + '" should be boolean.');
                        n[t] = e[t]
                    } else {
                        if ("string" != typeof e[t]) throw new Error('The "' + t + '" should be a string.');
                        n.client[t] = e[t]
                    }
            })
        },
        _ = function() {
            var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                o = s;
            if (!a.isInit) throw new Error('The "init" function must be called first.');
            if (t) {
                if (!(t instanceof Object) || Array.isArray(t)) throw new Error('The "signinConfig" must be "object".');
                e = t, (n = Object.create(s)).client = Object.create(s.client), e.scope && "string" == typeof e.scope && (n.client.scope = e.scope), e.redirectURI && "string" == typeof e.redirectURI && (n.client.redirectURI = e.redirectURI), q(t, o = n)
            }
            return W(o, i)
        },
        $ = function(e) {
            if (!e.clientId || "string" != typeof e.clientId) throw new Error('The "clientId" should be a string.');
            if (s.client.clientId = e.clientId, !e.redirectURI || "string" != typeof e.redirectURI) throw new Error('The "redirectURI" should be a string.');
            s.client.redirectURI = e.redirectURI, q(e), oe(), a.isInit = !0
        },
        ee = function() {
            c[1] = "2", _(null, !1)
        },
        ne = function() {
            ee()
        },
        te = function(e) {
            32 === e.keyCode ? e.preventDefault() : 13 === e.keyCode && (e.preventDefault(), ee())
        },
        ie = function(e) {
            32 === e.keyCode && (e.preventDefault(), ee())
        },
        oe = function() {
            var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = document.getElementById("appleid-signin");
            if (t) {
                (e = t) && e.firstChild && e.removeChild(e.firstChild);
                var i = function(e) {
                    var n, t, i = e.dataset,
                        o = "black",
                        A = !0,
                        r = "sign-in",
                        c = 15;
                    return null != i && (i.color && (o = i.color), i.border && (A = "false" !== i.border), i.type && (r = i.type), i.borderRadius && !isNaN(parseInt(i.borderRadius, 10)) && (c = parseInt(i.borderRadius, 10)), i.width && !isNaN(parseInt(i.width, 10)) && (n = parseInt(i.width, 10)), i.height && !isNaN(parseInt(i.height, 10)) && (t = parseInt(i.height, 10))), "sign in" === r && (r = "sign-in"), {
                        color: o,
                        border: A,
                        type: r,
                        borderRadius: c,
                        width: n,
                        height: t
                    }
                }(t);
                r(d({
                    id: "appleid-signin"
                }, i, n)), t.addEventListener("click", ne), t.addEventListener("keydown", te), t.addEventListener("keyup", ie)
            }
        };
    ! function(e) {
        e.ClientId = "appleid-signin-client-id", e.Scope = "appleid-signin-scope", e.RedirectURI = "appleid-signin-redirect-uri", e.State = "appleid-signin-state", e.Nonce = "appleid-signin-nonce", e.UsePopup = "appleid-signin-use-popup", e.DEV_URI = "appleid-signin-dev-uri", e.DEV_ENV = "appleid-signin-dev-env", e.DEV_PATH = "appleid-signin-dev-path"
    }(Q || (Q = {}));
    var Ae, re = function() {
            if (!J) {
                J = {};
                for (var e = function() {
                        var e = {};
                        return Object.keys(Q).forEach(function(n) {
                            return e[Q[n]] = !0
                        }), e
                    }(), n = document.getElementsByTagName("meta"), t = "", i = 0; i < n.length; i++) e[t = n[i].getAttribute("name")] && (J[t] = n[i].getAttribute("content"))
            }
            return J
        },
        ce = {},
        de = {
            init: function(e) {
                "2" === c[0] ? c[0] = "3" : c[0] = "1", ce = d({}, ce, e), $(e)
            },
            signIn: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return _(e)
            },
            renderButton: oe
        },
        ae = function() {
            if (n = re(), Object.keys(n).length > 0) {
                "1" === c[0] ? c[0] = "4" : c[0] = "2";
                var e = function() {
                    var e = {
                            clientId: "",
                            scope: "",
                            redirectURI: "",
                            state: "",
                            nonce: ""
                        },
                        n = re();
                    n[Q.ClientId] && (e.clientId = n[Q.ClientId]), n[Q.Scope] && (e.scope = n[Q.Scope]), n[Q.RedirectURI] && (e.redirectURI = n[Q.RedirectURI]), n[Q.State] && (e.state = n[Q.State]), n[Q.Nonce] && (e.nonce = n[Q.Nonce]), n[Q.UsePopup] && (e.usePopup = "true" === n[Q.UsePopup]);
                    var t = n[Q.DEV_ENV],
                        i = n[Q.DEV_PATH],
                        o = n[Q.DEV_URI];
                    return (t || i || o) && (t && (s.env = t), i && (s.path = i), o && (s.baseURI = o, N(s))), e
                }();
                $(d({}, e, ce))
            }
            var n
        };
    "complete" === document.readyState || "loaded" === document.readyState || "interactive" === document.readyState ? ae() : document.addEventListener("DOMContentLoaded", function() {
        ae()
    }), Ae = f, setTimeout(function() {
        return T(Ae)
    }), e.auth = de, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});