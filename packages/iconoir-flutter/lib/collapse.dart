import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Collapse extends StatelessWidget {
  const Collapse({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Collapse.svg');
}
