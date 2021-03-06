import Filterable from "./Filterable";
import * as filters from "./filters";
import * as htmlaudio from "./htmlaudio";
import Sound from "./Sound";
import SoundLibrary from "./SoundLibrary";
import SoundSprite from "./sprites/SoundSprite";
import utils from "./utils/SoundUtils";
import * as webaudio from "./webaudio";

/**
 * Global namespace provided by the PixiJS project.
 * @namespace PIXI
 * @see https://github.com/pixijs/pixi.js
 */
const sound = SoundLibrary.init();

export {
    filters,
    htmlaudio,
    webaudio,
    sound,
    utils,
    Sound,
    SoundSprite,
    Filterable,
    SoundLibrary
};
