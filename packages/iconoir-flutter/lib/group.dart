import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Group extends StatelessWidget {
  const Group({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Group.svg');
}
