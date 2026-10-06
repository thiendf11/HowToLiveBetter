# Skill trả lời dựa trên sách

Skill giúp AI tra cứu bản Việt của *Cẩm nang sống hiệu quả* trước khi trả lời các câu hỏi như nên làm gì, việc đó có đáng không, chọn phương án nào, lúc gặp sự cố cần làm gì trước, hoặc có thể xin khoản trợ cấp nào. Câu trả lời cần nêu rõ chương và mục. Không tìm thấy thì nói rõ, không tự bịa số liệu.

Quy tắc đầy đủ nằm trong [SKILL.md](SKILL.md). Skill dùng nội dung tại `book/` trong repo này. Nếu bạn chỉ sao chép riêng skill mà không có thư mục sách, skill sẽ không thể tra cứu nội dung.

## Dùng trong repo hiện tại

Mở Codex hoặc Claude Code tại repo và gọi `$life-decision-guide-vi`. Nếu công cụ chưa tự tìm thấy skill, cài vào thư mục cá nhân theo hướng dẫn bên dưới.

## Cài cho Codex

Trong thư mục gốc repo, chạy:

```bash
mkdir -p ~/.agents/skills/life-decision-guide-vi
cp skills/life-decision-guide/SKILL.md ~/.agents/skills/life-decision-guide-vi/SKILL.md
```

Sau đó mở repo có thư mục `book/` và gọi `$life-decision-guide-vi`. Nếu chưa hiện, khởi động lại Codex.

## Cài cho Claude Code

Trong thư mục gốc repo, chạy:

```bash
mkdir -p ~/.claude/skills/life-decision-guide-vi
cp skills/life-decision-guide/SKILL.md ~/.claude/skills/life-decision-guide-vi/SKILL.md
```

Mở Claude Code trong repo có thư mục `book/`; sau đó gọi skill bằng tên `life-decision-guide-vi`.

## Phạm vi và giới hạn

Skill đọc bản dịch tiếng Việt trong `book/`. Các số liệu và nguồn phải giữ đúng theo sách. Luật, bảo hiểm, trợ cấp và thủ tục trong sách phản ánh Trung Quốc đại lục, không mặc nhiên áp dụng ở Việt Nam. Với tình huống khẩn cấp đang xảy ra, trước tiên gọi dịch vụ cấp cứu tại nơi người dùng đang ở.
