import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DragHandGesture extends StatelessWidget {
  const DragHandGesture({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DragHandGesture.svg');
}
