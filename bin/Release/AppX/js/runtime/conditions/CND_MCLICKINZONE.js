﻿//CND_MCLICKINZONE Object
// -----------------------------------------------------------------
/* Copyright (c) 1996-2016 Clickteam
 *
 * This source code is part of the HTML5 or Windows10 exporter for Clickteam Multimedia Fusion 2.
 *
 * Permission is hereby granted to any person obtaining a legal copy
 * of Clickteam Multimedia Fusion 2 to use or modify this source code for
 * debugging, optimizing, or customizing applications created with
 * Clickteam Multimedia Fusion 2.
 * Any other use of this source code is prohibited.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

function CND_MCLICKINZONE() {
}
CND_MCLICKINZONE.prototype = {
    eva1: function (rhPtr, hoPtr) {
        var key = rhPtr.rhEvtProg.rhCurParam0;
        if (this.evtParams[0].value == key) {
            var p = this.evtParams[1];
            if (rhPtr.rh2MouseX >= p.x1 && rhPtr.rh2MouseX < p.x2 && rhPtr.rh2MouseY >= p.y1 && rhPtr.rh2MouseY < p.y2) {
                return true;
            }
        }
        return false;
    },
    eva2: function (rhPtr) {
        if (this.evtParams[0].value == rhPtr.rhEvtProg.rh2CurrentClick) {
            var p = this.evtParams[1];
            if (rhPtr.rh2MouseX >= p.x1 && rhPtr.rh2MouseX < p.x2 && rhPtr.rh2MouseY >= p.y1 && rhPtr.rh2MouseY < p.y2) {
                return true;
            }
        }
        return false;
    }
}
