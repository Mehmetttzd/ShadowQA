"""add screenshot path manually

Revision ID: 3275f77ee68c
Revises: 7878b0ee7134
Create Date: 2026-05-20 17:09:26.781524

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '3275f77ee68c'
down_revision: Union[str, Sequence[str], None] = '7878b0ee7134'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    pass


def downgrade() -> None:
    """Downgrade schema."""
    pass
