import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PeopleRounded extends StatelessWidget {
  const PeopleRounded({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PeopleRounded.svg');
}
