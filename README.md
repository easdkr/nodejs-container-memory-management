# Node.js container memory management

### 컨테이너 실행 및 메모리 제한 확인

```bash
docker run --memory 100M --interactive --tty node:20 bash
```

### Docker memory 초과 시에도 종료되지 않는 컨테이너

```bash
cd test-fatal-error

run.sh
```
