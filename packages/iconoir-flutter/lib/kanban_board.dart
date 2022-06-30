import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class KanbanBoard extends StatelessWidget {
  const KanbanBoard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/KanbanBoard.svg');
}
