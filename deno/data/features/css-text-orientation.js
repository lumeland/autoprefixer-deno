/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-text-orientation) es2022 production */
var n = Object.create;
var A = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, t, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of l(B)) {
      !u.call(C, e) && e !== t && A(C, e, {
        get: () => B[e],
        enumerable: !(o = i(B, e)) || o.enumerable,
      });
    }
  }
  return C;
};
var x = (
  C,
  B,
  t,
) => (t = C != null ? n(s(C)) : {},
  p(
    B || !C || !C.__esModule
      ? A(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var d = S((F, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        2: "C K L G M N O",
      },
      C: {
        1: "AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0 1 2 3 4 5 6 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z 1B 2B",
        194: "7 8 9",
      },
      D: {
        1: "HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB",
      },
      E: {
        1: "L G AC BC uB vB wB CC lB DC",
        2: "I n J D E F 4B sB 5B 6B 7B 8B",
        16: "A",
        33: "B C K tB jB kB 9B",
      },
      F: {
        1: "4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "0 1 2 3 F B C G M N O o p q r s t u v w x y z EC FC GC HC jB xB IC kB",
      },
      G: {
        1: "QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        2: "E sB JC yB KC LC MC NC OC PC",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB iC jC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "kC" },
      P: { 1: "lC mC nC oC pC tB qC rC sC tC uC lB vC", 2: "I" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 1: "yC" },
    },
    B: 4,
    C: "CSS text-orientation",
  };
});
var f = x(d()),
  { A: G, B: H, C: I } = f,
  { default: r, ...D } = f,
  c = r !== void 0 ? r : D;
export { c as default, G as A, H as B, I as C };
