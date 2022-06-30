import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Cut extends StatelessWidget {
  const Cut({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Cut.svg');
}
