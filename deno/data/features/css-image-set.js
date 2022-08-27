/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-image-set) es2022 production */
var s = Object.create;
var A = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var m = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var n = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !i.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = l(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? s(S(C)) : {},
  n(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = m((F, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        2: "C K L G M N O",
        164: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
      },
      C: {
        2: "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U 1B 2B",
        66: "V W",
        257: "Y Z c d e f g h i j k l a m H qB rB",
        772: "X",
      },
      D: {
        2: "I n J D E F A B C K L G M N O o p",
        164:
          "0 1 2 3 4 5 6 7 8 9 q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      E: {
        2: "I n 4B sB 5B",
        132: "A B C K tB jB kB 9B",
        164: "J D E F 6B 7B 8B",
        516: "L G AC BC uB vB wB CC lB DC",
      },
      F: {
        2: "F B C EC FC GC HC jB xB IC kB",
        164:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
      },
      G: {
        2: "sB JC yB KC",
        132: "QC RC SC TC UC VC WC XC YC ZC",
        164: "E LC MC NC OC PC",
        516: "aC bC cC uB vB wB lB",
      },
      H: { 2: "dC" },
      I: { 2: "mB I eC fC gC hC yB", 164: "H iC jC" },
      J: { 2: "D", 164: "A" },
      K: { 2: "A B C jB xB kB", 164: "b" },
      L: { 164: "H" },
      M: { 257: "a" },
      N: { 2: "A B" },
      O: { 164: "kC" },
      P: { 164: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 164: "wC" },
      R: { 164: "xC" },
      S: { 2: "yC" },
    },
    B: 5,
    C: "CSS image-set",
  };
});
var r = p(d()),
  { A: G, B: H, C: I } = r,
  { default: f, ...D } = r,
  c = f !== void 0 ? f : D;
export { c as default, G as A, H as B, I as C };
