# React_Playground

리액트로 이것저것 만들어보면서 노는 공간🩵🪼

## 합성을 사용하여 직접 구현해본 BottomSheet

### 도입전

```jsx
<BottomSheet
  ref={ref}
  isOpen={isOpen}
  title="제목"
  content="본문 내용"
  buttonContent="확인"
  onClickButton={() => {
    console.log("click");
  }}
></BottomSheet>
```

### 도입후

```jsx
<BottomSheet isOpen={isOpen} ref={ref}>
  <BottomSheet.Title>타이틀</BottomSheet.Title>
  <BottomSheet.Content>본문</BottomSheet.Content>
  <BottomSheet.Button onClickButton={handleButton}>클릭</BottomSheet.Button>
</BottomSheet>
```
