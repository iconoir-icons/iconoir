import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UndoAction extends StatelessWidget {
  const UndoAction({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/UndoAction.svg');
}
