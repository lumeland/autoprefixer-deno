/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-deviceadaptation) es2022 production */
var i = Object.create;
var A = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty;
var u = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !s.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = l(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var S = (
  C,
  B,
  e,
) => (e = C != null ? i(p(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = u((F, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F zB", 164: "A B" },
      B: {
        66: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        164: "C K L G M N O",
      },
      C: {
        2: "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB 1B 2B",
      },
      D: {
        2: "I n J D E F A B C K L G M N O o p q r s t u v w x",
        66:
          "0 1 2 3 4 5 6 7 8 9 y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      E: {
        2: "I n J D E F A B C K L G 4B sB 5B 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
      },
      F: {
        2: "0 1 2 3 4 5 6 7 8 F B C G M N O o p q r s t u v w x y z EC FC GC HC jB xB IC kB",
        66:
          "9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
      },
      G: {
        2: "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
      },
      H: { 292: "dC" },
      I: { 2: "mB I H eC fC gC hC yB iC jC" },
      J: { 2: "D A" },
      K: { 2: "A b", 292: "B C jB xB kB" },
      L: { 2: "H" },
      M: { 2: "a" },
      N: { 164: "A B" },
      O: { 2: "kC" },
      P: { 2: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 66: "wC" },
      R: { 2: "xC" },
      S: { 2: "yC" },
    },
    B: 5,
    C: "CSS Device Adaptation",
  };
});
var r = S(d()),
  { A: G, B: H, C: I } = r,
  { default: f, ...c } = r,
  m = f !== void 0 ? f : c;
export { G as A, H as B, I as C, m as default };
