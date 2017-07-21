/// <reference types="pixi.js" />
import Sound from "../Sound";
export interface RenderOptions {
    width?: number;
    height?: number;
    fill?: string | CanvasPattern | CanvasGradient;
}
export declare type ExtensionMap = {
    [key: string]: boolean;
};
export default class SoundUtils {
    private static PLAY_ID;
    private static FORMAT_PATTERN;
    static extensions: string[];
    static supported: ExtensionMap;
    static resolveUrl(source: string | PIXI.loaders.Resource): string;
    static sineTone(hertz?: number, seconds?: number): Sound;
    static render(sound: Sound, options?: RenderOptions): PIXI.BaseTexture;
    static playOnce(url: string, callback?: (err?: Error) => void): string;
}