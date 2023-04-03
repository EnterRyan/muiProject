# WSS_Sample Project

## Page List

- AppLoginPage
- AppDetailPage [Maintenance, Project]
- AppFagPage

## Component 디자인 규칙

- Atom : 더이상 분해할 수 없는 기본 컴포넌트.
- Molecule : 한가지 일만 하는 컴포넌트 SRP(Single Responsibility Principle) 원칙.
- Organism : 서비스에 표현될 수 있는 명확한 영역. (여기서부턴 재사용의 영역이 낮아짐.)
- Template : 레이아웃에 배치하고 구조를 잡는 와이어 프레임.(실제 콘텐츠가 없는 page 수준의 스켈레톤)
- Page : 유저가 볼 수 있는 실제 콘텐츠

## 컴포넌트 분리.

#### Atoms

> - SelectTableType.jsx
> - BtnSubmit.jsx
> - BtnCallDialog.jsx
> - BtnShowHidenComponent.jsx
> - ShowDateValue.jsx\
> - BtnIcon.jsx

#### Molecule

> - Calendar.jsx
> - Editor.jsx
> - HiddenForm.jsx
> - DialogHeader.jsx

#### Organism

> - UserInputHistory.jsx
