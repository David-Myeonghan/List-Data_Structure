# List-Data_Structure
### List
- 자료를 순서대로 저장하는 자료구조
- 자료의 앞/뒤 순서가 있고, 물리적이나 논리적으로 선형(sequential) 구조임

## Intro
### 배열 리스트 (ArrayList)
- 동일한 자료를 한꺼번에 여러 개 만들때 사용
- 자료의 개수를 지정하고 물리적 순서와 논리적 순서가 동일
- 구현이 비교적 쉬움

### 연결 리스트 (LinkedList)
- 전체 리스트의 크기가 동적으로 변화 함. 필요할 때마다 추가할 수 있음
- 물리적인 순서와 논리적인 순서가 동일하지 않을 수 있음
- 구현이 배열 리스트보다 복잡함

## 배열 리스트

- **동일한 데이터 타입**을 순서에 따라 관리하는 자료 구조
- 정해진 크기가 있음(fixed-length) **->** 크기에 더 자료를 추가할 때, 더 큰 메모리에 allocation한다.
- 물리적으로 연속된 메모리를 사용하므로 자료의 추가와 제거시 다른 요소들의 이동이 필요함 O(n)
- 물리적으로 연속된 메모리를 사용하므로 배열의 i 번째 자료를 찾는 연산이 빠름 : 인덱스 연산 O(1) <= 동일한 데이터 타입을 사용하기 때문에

## 연결 리스트
- **동일한 데이터 타입**을 순서에 따라 관리하는 자료 구조
- 자료를 저장하는 노드에는 자료와 다음 요소를 가리키는 링크(포인터)가 있음
- 자료가 추가 될때 노드 만큼의 메모리를 할당 받고 이전 노드의 링크로 연결함 **(정해진 크기가 없음)** -> 크기가 정해져 있지 않다는 면에서 배열 리스트에 비해 효율적인 메모리 사용
- 자료를 추가하거나 삭제할 때 연결되는 링크의 조정만 하면 됨 : O(1)
- 연결 리스트의 i 번째 요소를 찾는게 걸리는 시간은 요소의 개수에 비례 : O(n)

---

Testing/Working on Github Terminal env.