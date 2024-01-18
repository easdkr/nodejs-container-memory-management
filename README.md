# Node.js container memory management

### 컨테이너 실행 및 메모리 제한 확인

```bash
docker run --memory 100M --interactive --tty node:20 bash
```

### Docker memory 초과 시에도 종료되지 않는 컨테이너

```bash
cd test-fatal-error

. run.sh
```

### 메모리에 버퍼를 "할당" 하는 애플리케이션

```bash
cd buffer-example
. run.sh
```

### 버파가 데이터로 채워지는 애플리케이션

```bash
cd buffer-example-fill
. run.sh
```

### 버퍼가 데이터로 채워지고 컨테이너가 swap을 사용할 수 없는 애플리케이션

```bash
cd buffer-example-fill-killed
. run.sh
```
